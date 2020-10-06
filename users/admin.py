from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from student.models import CoursesEnrolled
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser


class CoursesEnrolledAdminInline(admin.TabularInline):
    model = CoursesEnrolled


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ('email', 'is_active', 'teacher')
    list_filter = ('email', 'is_active', 'teacher')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'teacher')}),
    )
    inlines = (CoursesEnrolledAdminInline, )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_active', 'teacher')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(CustomUser, CustomUserAdmin)