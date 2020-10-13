from django.contrib import admin
from knox.models import AuthToken
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from student.models import CoursesEnrolled
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser
from teacher.models import BecomeTeacher
from django.contrib.admin import AdminSite
from django.utils.translation import ugettext_lazy


class CoursesEnrolledAdminInline(admin.TabularInline):
    model = CoursesEnrolled


class CustomUserAdmin(UserAdmin):
    
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ('email', 'is_active', 'teacher', 'is_teacher', 'courses_count')
    list_filter = ('email', 'is_active', 'teacher', 'is_teacher')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'teacher')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('password1', 'password2', 'is_active', 'teacher')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

    def courses_count(self, obj):
        return len(CoursesEnrolled.objects.all().filter(teacher=obj.teacher))
    

    def save_model(self, request, obj, form, change):
        if obj.teacher!=None:
            obj.email = obj.teacher.email
            obj.is_teacher = True
        else:
            obj.is_teacher = False
        super().save_model(request, obj, form, change)
        
    def get_queryset(self, request):
        return self.model.objects.exclude(teacher=None)


class Student(CustomUser):
    class Meta: 
        proxy = True


class StudentAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ('email', 'is_active', 'show_payment_option', 'courses_count')
    list_filter = ('email', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'show_payment_option', 'teacher')}),
    )
    inlines = (CoursesEnrolledAdminInline, )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


    def courses_count(self, obj):
        return len(CoursesEnrolled.objects.all().filter(student=obj))
    def get_queryset(self, request):
        return self.model.objects.filter(teacher=None)




admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.unregister(Group)
admin.site.unregister(AuthToken)
admin.site.site_header = 'LearnerZ Corner Admin Panel'