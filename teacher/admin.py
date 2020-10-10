from django.contrib import admin
from .models import BecomeTeacher



class BecomeTeacherManager(admin.ModelAdmin):
	list_display = ('name', 'email', 'ph_no', 'experience', 'qualification')
	


admin.site.register(BecomeTeacher, BecomeTeacherManager)
# Register your models here.
