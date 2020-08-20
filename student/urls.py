from django.urls import path, include
from .api import CoursesEnrolledViewAPI, CoursesEnrolledIndividualAPI, EventsAPI, MyCoursesAPI



urlpatterns = [
    #path('api/student/events', , name='events'),
    path('api/auth/student/courses', CoursesEnrolledViewAPI.as_view(), name='courses-enrolled'),
    path('api/auth/student/events', EventsAPI.as_view(), name='events'),
    path('api/auth/student/courses/<int:pk>', CoursesEnrolledIndividualAPI.as_view(), name='delete-courses-enrolled'),
    path('api/auth/student/mycourses', MyCoursesAPI.as_view(), name='courses-enrolled'),
]