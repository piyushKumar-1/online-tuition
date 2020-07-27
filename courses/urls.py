from django.urls import path, include
from .api import CoursesAPI, SubCoursesAPI, SubjectAPI




urlpatterns = [
    path('api/get/courses', CoursesAPI.as_view()),
    path('api/get/sub_courses', SubCoursesAPI.as_view()),
    path('api/get/subjects', SubjectAPI.as_view()),
]