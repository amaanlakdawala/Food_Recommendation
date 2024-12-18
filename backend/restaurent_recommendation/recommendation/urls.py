
from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('login/',user_login,name='login'),
    path('register/',user_register,name='register'),
    path('logout/',user_logout,name='logout'),
    path('all_dishes/',get_all_dishes,name='all_dishes'), #want to remove no use of it
    path('get_dish/<int:pk>/',get_dish,name='get_dish'),
    path('get_menu/',get_menu,name='get_menu'),
    path('book_table/',booktable,name='book_table'),
    path('recommend_dishes/',recommend_dishes,name='recommend_dishes'),
    path('create-order/',create_order,name='create-order')
   

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)