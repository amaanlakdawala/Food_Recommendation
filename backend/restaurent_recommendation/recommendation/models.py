from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    diet_goals = models.TextField(null=True,blank=True)
    allergies = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.username

class Dishes(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.TextField()  # E.g., "Chicken, Spices, Butter"
    calories = models.FloatField()  # Total calories
    protein = models.FloatField()  # Protein content in grams
    fats = models.FloatField()  # Fat content in grams
    carbs = models.FloatField()  # Carbohydrates content in grams
    diet_type = models.CharField(max_length=50)  # E.g., "Keto", "Vegan"
    cuisine = models.CharField(max_length=50)  # E.g., "Italian", "Indian"
    meal_type = models.TextField(null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    price = models.FloatField(null=True)

    def __str__(self):
        return self.name
    
class DishImage(models.Model):
    dish = models.ForeignKey(Dishes, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='dishes/')

    def __str__(self):
        return f"Image for {self.dish.name}"

class TableBooking(models.Model):
    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    date=models.DateField()
    time= models.TimeField()
    guests=models.IntegerField(default=1)

    def __str__(self):
        return f"Booking Confirmed For {self.name}"

