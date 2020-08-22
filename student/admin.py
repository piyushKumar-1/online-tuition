from django.contrib import admin
from .models import Events, CoursesEnrolled


class CourseEnrolledAdmin(admin.ModelAdmin):
    list_display = ('student', 'course_enrolled', 'department', 'enrolled_date', 'completed', 'teacher')

    ordering = ('course_enrolled','student','department', 'teacher')



admin.site.register(Events)
admin.site.register(CoursesEnrolled, CourseEnrolledAdmin)

# Register your models here.
