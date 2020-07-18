from django.urls import path, include
from .api import CoursesAPI, SubCoursesAPI




urlpatterns = [
    path('api/get/courses', CoursesAPI.as_view()),
    path('api/get/sub_courses', SubCoursesAPI.as_view()),
]    