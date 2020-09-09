from django.contrib import admin
from .models import Events, CoursesEnrolled, ChatModel


class CourseEnrolledAdmin(admin.ModelAdmin):
    list_display = ('student', 'course_enrolled', 'department', 'enrolled_date', 'completed', 'teacher')

    ordering = ('course_enrolled','student','department', 'teacher')

class ChatAdmin(admin.ModelAdmin):
    list_display = ('student', 'teacher', 'msg', 'msg_side', 'msg_time', 'approval')

    ordering = ('student', 'approval', 'msg_time')



admin.site.register(Events)
admin.site.register(ChatModel, ChatAdmin)
admin.site.register(CoursesEnrolled, CourseEnrolledAdmin)


# Register your models here.
