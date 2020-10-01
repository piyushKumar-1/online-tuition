from django.urls import path, include
from .api import CreateEnquiryView, GetEnquieryView, PostTeacherMessage, CreateContactUsMessage, PostAdminSeen




urlpatterns = [
    path('api/post/enquiry', CreateEnquiryView.as_view()),
    path('api/get/enquiry', GetEnquieryView.as_view()),
    path('api/post/contactus', CreateContactUsMessage.as_view()),
    path('api/auth/admin/message', PostTeacherMessage.as_view()),
    path('api/auth/admin/message/seen', PostAdminSeen.as_view()),
]