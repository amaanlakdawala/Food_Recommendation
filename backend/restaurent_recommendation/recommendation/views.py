from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, Dishes,TableBooking
from .serializer import UserSerializer, DishSerializer,TableBookingSerializer
from django.contrib.auth import authenticate, login,logout
import json
import pandas as pd
import spacy
from django.shortcuts import render
from django.http import JsonResponse
import razorpay

# Create your views here.

@api_view(['GET'])
def user_login(request):
    username = request.GET.get('username')
    password = request.GET.get('password')

    if not username or not password:
        return Response({"error": "Username and password are required"})
    
    user=authenticate(username=username,password=password)
    print(user)
    if user is not None:
         login(request,user)
         return Response({"message": "Login successful"})

    if request.method=='GET':
        if request.user.is_authenticated:
            serialize = UserSerializer(request.user)
            return Response(serialize.data)
        return Response({"error": "Authentication required"})
    
@api_view(['POST'])
def user_register(request):
    if request.method=='POST':
            serialize = UserSerializer(data=request.data)
            if serialize.is_valid():
                 serialize.save()
                 return Response({'success':'User Created'})
            return Response({"error": "Data is not Valid"})
    

def user_logout(request):
     if request.user.is_authenticated:
          logout(request)
          return Response({'success':'User Logout'})
     return Response({'error':'User Not Logged Out'})
     
    

@api_view(['GET'])
def get_all_dishes(request):
     if request.method=='GET':
          dishes = Dishes.objects.all()
          serialize = DishSerializer(dishes,many=True)
          return Response(serialize.data)
     return Response({'error':'Failed to get all Dishes'})

@api_view(['GET'])
def get_dish(request,pk):
    if request.method=='GET':
         try:
              dish = Dishes.objects.get(id=pk)
              serialize = DishSerializer(dish)
              return Response(serialize.data)
         except:
              return Response({'error':'Dish not found'})
         


@api_view(['GET'])
def get_menu(request):
     if request.method=='GET':
          try:
               starter_dishes = Dishes.objects.filter(meal_type='Starter')

               print(starter_dishes)
               
               serialized_starter_dishes = DishSerializer(starter_dishes,many=True).data

               main_course = Dishes.objects.filter(meal_type='Main Course')
               print("below is main course")
               print(f"Main Course {main_course}")
               serialized_main_course = DishSerializer(main_course,many=True).data
               response_data={
                    'starters':serialized_starter_dishes,
                    'main_course':serialized_main_course
               }
               return Response(response_data)
          except:
               return Response({"error":"Unable to fetch Starter Dishes"}) 
          

@api_view(['POST'])
def booktable(request):
     if request.method == 'POST':
          serailize = TableBookingSerializer(data=request.data)
          if serailize.is_valid():
               requested_time = serailize.validated_data.get('time')
               requested_date = serailize.validated_data.get('date')

               existing_data = TableBooking.objects.filter(time=requested_time,date=requested_date)
               if existing_data:
                    return Response({'error':'Table already booked for this time and date'},status=400)
               
               serailize.save()
               return Response({'success':'Table booked successfully'},status=200)
          return Response({'error':'Failed to book table'},status=400)
     


# Load spaCy model
nlp = spacy.load("en_core_web_md")
@api_view(['GET','POST'])
def recommend_dishes(request):
    user_diet_type='Vegan'
    user_add_to_cart_item='Tofu Stir Fry'

    if request.method=='POST' :
         
          user_diet_type = request.data.get('user_diet_type')
          user_add_to_cart_item = request.data.get('name')
          print(user_add_to_cart_item)
          extracted_dish = Dishes.objects.get(name=user_add_to_cart_item)
          extracted_diet_type = extracted_dish.diet_type
          file = r'C:\Users\hp1\Desktop\dishes.json'
    
     # Load and process the JSON file
          with open(file, 'r') as f:
               data = json.load(f)
          extracted_data = [item['fields'] for item in data]
    
    # Load into DataFrame
          df = pd.DataFrame(extracted_data)

    # Filter vegan dishes and target user's dish
          data_vegan = df[df['diet_type'] == 'Vegan']
          user_dish = data_vegan[data_vegan['name'] == 'Grilled Salmon']
          user_dish_ingredients = user_dish['ingredients'].iloc[0]

    # Compute similarity scores
          vector_of_user_dish = nlp(user_dish_ingredients)
          similarities = []
          for i in data_vegan['ingredients']:
               recommend_dish_vector = nlp(i)
               similarity = vector_of_user_dish.similarity(recommend_dish_vector)
               similarities.append(similarity)
    
          data_vegan['Similarity_Score'] = similarities
          final_result = data_vegan.sort_values(by='Similarity_Score', ascending=False)

    # Filter recommendations
          sorted_data_without_first = final_result.iloc[1:]
          starter = 0
          main_course = 0
          drinks = 0
          final_recommendation = []

          for index, dish in sorted_data_without_first.iterrows():
               if dish['meal_type'] == 'Starter' and starter <= 1:
                    final_recommendation.append(dish)
                    starter += 1
               elif dish['meal_type'] == 'Main Course' and main_course <= 1:
                    final_recommendation.append(dish)
                    main_course += 1
               elif dish['meal_type'] == 'Drink' and drinks <= 1:
                    final_recommendation.append(dish)
                    drinks += 1

    # Convert to DataFrame for easier display
          final_recommendation_df = pd.DataFrame(final_recommendation)

    # Convert DataFrame to JSON to send as a response
          recommendations_json = final_recommendation_df.to_dict(orient='records')
          print(recommendations_json)

          return JsonResponse({'recommendations': recommendations_json})

def makepayment(request):
    context = {}
    total = 5000
    amount_in_paise = total * 100 
    context['total'] = amount_in_paise     
    client = razorpay.Client(auth=("rzp_test_mv5IZmGRDYEyR3", "NsZOUKGdQeR9SIAAN26TyE8D"))
    data = {"amount": amount_in_paise, "currency": "INR", "receipt": "5000"}
    payment = client.order.create(data=data)
    context['payment'] = payment
    return JsonResponse({'payment':payment })    

from django.http import JsonResponse
from razorpay import Client

def create_order(request):
    try:
        client = Client(auth=("rzp_test_mv5IZmGRDYEyR3", "NsZOUKGdQeR9SIAAN26TyE8D"))
        data = {
            "amount": 50000,  # Amount in paise (₹500)
            "currency": "INR",
            "payment_capture": 1  # Auto-capture payment
        }
        payment = client.order.create(data)
        return JsonResponse({"order_id": payment['id'], "amount": data['amount']})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def success_payment(request):
    return JsonResponse({'Success Payemnt':'Payment received successfully'})
    
         
    
         
        
             
               
          


    

    
    
 
    

       


