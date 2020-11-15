from django.contrib import admin
from .models import Events, CoursesEnrolled, ChatModel, Feedback, SubjectEnrolled, selectedTeachers
from courses.models import Courses, Subjects, Subjects

import csv
from django.http import HttpResponse



class SubjectsEnrolledAdminInline(admin.TabularInline):
    model = SubjectEnrolled
    extra = 0


class SubjectEnrolledAdmin(admin.ModelAdmin):
    list_display = "__all__"


class selectedTeachersAdminInline(admin.TabularInline):
    model = selectedTeachers
    extra = 0



class CourseEnrolledAdmin(admin.ModelAdmin):
    list_display = ('student', 'course_enrolled', 'department', 'enrolled_date', 'completed', 'teacher')
    exclude = ('subject_ids',)
    list_filter = ('department', 'teacher', 'enrolled_date')
    ordering = ('course_enrolled','student','department', 'teacher')
    inlines = (selectedTeachersAdminInline, SubjectsEnrolledAdminInline )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('student', 'course_enrolled', 'department', 'enrolled_date', 'completed', 'select_teachers')}
        ),
    )
    actions = ['export_as_csv']
    def export_as_csv(self, request, queryset):
        meta = self.model._meta
        field_names = [field.name for field in meta.fields]

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename={}.csv'.format(meta)
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            row = writer.writerow([getattr(obj, field) for field in field_names])

        return response



class ChatAdmin(admin.ModelAdmin):
    list_display = ('student', 'teacher', 'msg', 'msg_time', 'msg_from', 'approval')
    exclude = ('msg_side',)
    ordering = ('student', 'approval', 'msg_time')
    def msg_from(self, obj):
        if obj.from_admin:
            return "Admin"
        if obj.msg_side:
            return "Student"
        return "Teacher"
    actions = ['export_as_csv']
    def export_as_csv(self, request, queryset):
        meta = self.model._meta
        field_names = [field.name for field in meta.fields]

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename={}.csv'.format(meta)
        writer = csv.writer(response)

        writer.writerow(field_names)
        for obj in queryset:
            row = writer.writerow([getattr(obj, field) for field in field_names])

        return response


class EventsAdmin(admin.ModelAdmin):
    list_display = ('topic', 'student', 'teacher', 'event_date', 'event_time')
    exclude = ('msg_side',)
    list_filter = ('teacher',)


admin.site.register(Events, EventsAdmin)
admin.site.register(ChatModel, ChatAdmin)
admin.site.register(CoursesEnrolled, CourseEnrolledAdmin)
admin.site.register(Feedback)
