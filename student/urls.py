from django.urls import path, include
from .api import CoursesEnrolledViewAPI, EventsAPI, MyCoursesAPI, StudentChatAPI, StudentFilesAPI



urlpatterns = [
    #path('api/student/events', , name='events'),
    path('api/auth/student/courses', CoursesEnrolledViewAPI.as_view(), name='courses-enrolled'),
    path('api/auth/student/events', EventsAPI.as_view(), name='events'),
    path('api/auth/student/mycourses', MyCoursesAPI.as_view(), name='courses-enrolled'),
    path('api/auth/student/mycourses/<int:enr_id>', MyCoursesAPI.as_view(), name='delete-courses-enrolled'),
    path('api/auth/student/chat', StudentChatAPI.as_view(), name="student-chat"),
    path('api/auth/student/chat/<int:teacher_id>', StudentChatAPI.as_view(), name="student-chat"),
    path('api/auth/student/upload', StudentFilesAPI.as_view(), name="student-upload"),
]
