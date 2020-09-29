from django.contrib import admin
from .models import Enquiry, TeacherMessage, ContactUsMessage






admin.site.register(Enquiry)
admin.site.register(TeacherMessage)
admin.site.register(ContactUsMessage)

# Register your models here.
