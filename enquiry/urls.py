from django.urls import path, include
from .api import CreateEnquiryView, GetEnquieryView




urlpatterns = [
    path('api/post/enquiry', CreateEnquiryView.as_view()),
    path('api/get/enquiry', GetEnquieryView.as_view()),
]