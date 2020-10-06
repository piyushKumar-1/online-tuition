from django.contrib import admin
from .models import Courses, SubCourses, Subjects



class SubCoursesAdminInline(admin.TabularInline):
    model = SubCourses

class CoursesAdmin(admin.ModelAdmin):
    inlines = (SubCoursesAdminInline, )

class SubjectsAdminInline(admin.TabularInline):
    model = Subjects

class SubCoursesAdmin(admin.ModelAdmin):
	list_display = ('sub_course_name', 'course', 'active_field')
	ordering = ('course',)
	list_filter = ('active_field', 'course')

	
	inlines = (SubjectsAdminInline, )



class SubjectsAdmin(admin.ModelAdmin):
	list_display = ('subject_name', 'sub_course', 'course', 'active_field')
	ordering = ('sub_course',)
	list_filter = ('active_field', 'sub_course', 'course')


	def save_model(self, request, obj, form, change):
		obj.course = obj.sub_course.course
		super().save_model(request, obj, form, change)




admin.site.register(Courses, CoursesAdmin)
admin.site.register(SubCourses, SubCoursesAdmin)
admin.site.register(Subjects, SubjectsAdmin)