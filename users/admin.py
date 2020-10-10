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
    list_display = ('email', 'is_active', 'teacher', 'is_teacher', 'show_payment_option')
    list_filter = ('email', 'is_active', 'teacher', 'is_teacher')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'teacher', 'show_payment_option')}),
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

    def save_model(self, request, obj, form, change):
        if obj.teacher!=None:
            obj.is_teacher = True
        else:
            obj.is_teacher = False
        super().save_model(request, obj, form, change)


admin.site.register(CustomUser, CustomUserAdmin)