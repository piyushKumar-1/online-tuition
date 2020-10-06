from django.contrib import admin
from .models import Enquiry, TeacherMessage, ContactUsMessage



class EnquiryMessageAdmin(admin.ModelAdmin):
	list_display = ('name', 'ph_no', 'email', 'country', 'department', 'subject')
	list_filter = ('country', 'department', 'subject')


class ContactUsMessageAdmin(admin.ModelAdmin):
	list_display = ('name', 'subject', 'email', 'message')





class TeacherMessageAdmin(admin.ModelAdmin):
	list_display = ('message', 'teacher', 'reply', 'seen')


	def save_model(self, request, obj, form, change):
		obj.user = request.user
		obj.seen = False
		super().save_model(request, obj, form, change)



admin.site.register(Enquiry, EnquiryMessageAdmin)
admin.site.register(TeacherMessage, TeacherMessageAdmin)
admin.site.register(ContactUsMessage, ContactUsMessageAdmin)

# Register your models here.
