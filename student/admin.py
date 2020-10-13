from django.contrib import admin
from .models import Events, CoursesEnrolled, ChatModel
from courses.models import Courses, Subjects, Subjects



class SubjectsAdminInline(admin.TabularInline):
    model = Subjects



class CourseEnrolledAdmin(admin.ModelAdmin):
    list_display = ('student', 'course_enrolled', 'department', 'enrolled_date', 'completed', 'teacher')
    exclude = ('subject_ids',)
    list_filter = ('department', 'teacher', 'enrolled_date')
    ordering = ('course_enrolled','student','department', 'teacher')
    

class ChatAdmin(admin.ModelAdmin):
    list_display = ('student', 'teacher', 'msg', 'msg_time', 'msg_from', 'approval')
    exclude = ('msg_side',)
    ordering = ('student', 'approval', 'msg_time')
    def msg_from(self, obj):
        if obj.msg_side:
            return "Student"
        return "Teacher"


class EventsAdmin(admin.ModelAdmin):
    list_display = ('topic', 'student', 'teacher', 'event_date', 'event_time')
    exclude = ('msg_side',)
    list_filter = ('teacher',)



admin.site.register(Events, EventsAdmin)
admin.site.register(ChatModel, ChatAdmin)
admin.site.register(CoursesEnrolled, CourseEnrolledAdmin)


# Register your models here.
