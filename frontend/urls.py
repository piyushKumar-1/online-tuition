from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index ),
    path('login/', views.index ),
    path('register/', views.index ),
    path('about/', views.index ),
    path('career/', views.index ),
    path('home/', views.index ),
    path('contact/', views.index ),
    path('practices/', views.index ),
    path('courses/', views.index ),
    path('reset/confirmation/<str:k>/<str:j>', views.index2),
]