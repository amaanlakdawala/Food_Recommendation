from rest_framework import serializers
from .models import User, Dishes,DishImage,TableBooking

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = ('id','username','diet_goals', 'allergies')

class DishImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DishImage
        fields = ['id', 'image']

class DishSerializer(serializers.ModelSerializer):
    images =  DishImageSerializer(many=True, read_only=True)
    class Meta:
        model = Dishes
        fields = ('id', 'name', 'ingredients', 'calories', 'protein', 'fats', 'carbs', 'diet_type','cuisine','meal_type','description','price','images')

class TableBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableBooking
        fields = ['name', 'email', 'date', 'time','guests']