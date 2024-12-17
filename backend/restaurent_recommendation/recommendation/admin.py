from django.contrib import admin
from .models import User,Dishes,DishImage,TableBooking

# Register your models here.



class DishImageInline(admin.TabularInline):
    model = DishImage
    extra = 1

class DishesAdmin(admin.ModelAdmin):
    inlines = [DishImageInline]


admin.site.register(Dishes, DishesAdmin)
admin.site.register(DishImage)
admin.site.register(User)
admin.site.register(TableBooking)