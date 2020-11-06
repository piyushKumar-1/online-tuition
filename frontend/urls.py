from django.urls import path, re_path
from . import views


urlpatterns = [

    #common routes
    path('', views.index ),
    path('login/', views.index ),
    path('register/', views.index ),
    path('about/', views.index ),
    path('join/', views.index ),
    path('home/', views.index ),
    path('contact/', views.index ),
    path('practices/', views.index ),
    path('courses/', views.index ),
    path('privacy-policy/', views.index ),
    path('courses/<str:k>/<str:j>', views.index2 ),

    #route to get to the FORGOT PASSWORD FRONTEND
    path('reset/confirmation/<str:k>/<str:j>', views.index2),

    #routes for STUDENTS
    path('student/dashboard', views.index ),
    path('student/courses', views.index ),
    path('student/timetable', views.index ),
    path('student/add-course', views.index ),
    path('student/feedback', views.index ),
    path('student/upload', views.index ),
    path('student/pay', views.index ),
    path('student/courses/<str:k>', views.index3),

    #routes for TEACHER
    path('teacher/available', views.index ),
    path('teacher/dashboard', views.index ),
    path('teacher/courses', views.index ),
    path('teacher/timetable', views.index ),
    path('teacher/uploads', views.index ),
    path('teacher/profile', views.index ),
    path('teacher/courses/<str:k>', views.index3),
    path('teacher/delete/<int:k>/<int:j>', views.index2),


]
