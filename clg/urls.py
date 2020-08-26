from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include("query.urls")),
    path('', include("users.urls")),
    path('', include("courses.urls")),
    path('', include("enquiry.urls")),
    path('', include("teacher.urls")),
    path('', include("student.urls")),
]


