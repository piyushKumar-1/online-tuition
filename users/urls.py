from django.urls import path, include
from .api import RegisterationAPI, LoginAPI, UserAPI, ResetPasswordAPI, PasswordTokenCheckAPI, SetNewPasswordAPI
from knox import views as knox_views


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterationAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name="knox_logout"),
    path('api/auth/reset', ResetPasswordAPI.as_view(), name="reset-password"),
    path('api/auth/reset/<uidb64>/<token>', PasswordTokenCheckAPI.as_view(), name="reset-confirmation"),
    path('api/auth/reset/final', SetNewPasswordAPI.as_view(), name='password-reset-complete')
]