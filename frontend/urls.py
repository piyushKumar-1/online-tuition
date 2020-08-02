from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index ),
    path('login/', views.index ),
    path('register/', views.index ),
    path('about/', views.index ),
    path('join/', views.index ),
    path('home/', views.index ),
    path('contact/', views.index ),
    path('practices/', views.index ),
    path('courses/', views.index ),
    path('student/dashboard', views.index ),
    path('courses/<str:k>/<str:j>', views.index2 ),
    path('reset/confirmation/<str:k>/<str:j>', views.index2),
]