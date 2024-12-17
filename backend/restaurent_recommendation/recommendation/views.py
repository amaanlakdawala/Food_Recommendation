from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, Dishes,TableBooking
from .serializer import UserSerializer, DishSerializer,TableBookingSerializer
from django.contrib.auth import authenticate, login,logout

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
         
        
             
               
          


    

    
    
 
    

       


