from django.contrib import admin
from .models import Enquiry, TeacherMessage, ContactUsMessage


class TeacherMessageAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        obj.user = request.user
        obj.seen = False
        super().save_model(request, obj, form, change)



admin.site.register(Enquiry)
admin.site.register(TeacherMessage, TeacherMessageAdmin)
admin.site.register(ContactUsMessage)

# Register your models here.
