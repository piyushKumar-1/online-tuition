from django.urls import path, include
from .api import CreateTeacherView, DashboardAPI, CoursesIndiAPI, UploadSubjectMaterial
from .views import download


urlpatterns = [
    path('api/post/join', CreateTeacherView.as_view()),
    path('api/auth/teacher/courses', DashboardAPI.as_view(), name="teacher-dashboard"),
    path('api/auth/teacher/mycourses/<int:enrCourseId>', CoursesIndiAPI.as_view(), name="teacher-dashboard"),
    path('api/auth/teacher/upload', UploadSubjectMaterial.as_view(), name="teacher-upload"),
    path('api/auth/teacher/download/<path:file>', download, name="teacher-download"),



]