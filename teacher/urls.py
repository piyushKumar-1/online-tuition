from django.urls import path, include
from .api import CreateTeacherView, DashboardSerializer


urlpatterns = [
    path('api/post/join', CreateTeacherView.as_view()),
    path('api/auth/teacher/courses', DashboardSerializer.as_view(), name="teacher-dashboard"),
]