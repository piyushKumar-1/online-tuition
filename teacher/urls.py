from django.urls import path, include
from .api import CreateTeacherView


urlpatterns = [
    path('api/post/join', CreateTeacherView.as_view()),
]