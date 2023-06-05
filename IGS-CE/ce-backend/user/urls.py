from django.urls import path
from .views import UserAuthenticationView, UserRegistrationView, CustomTokenObtainPairView, ChangePassword, Userlogout
from rest_framework_simplejwt.views import TokenRefreshView
from django.contrib.auth.views import LogoutView
urlpatterns = [
    path("login/", UserAuthenticationView.as_view()),
    path("logout/", Userlogout.as_view()),
    path("signup/", UserRegistrationView.as_view()),
    path("token/", CustomTokenObtainPairView.as_view()),
    path("refreshtoken/", TokenRefreshView.as_view()),
    path("", UserRegistrationView.as_view()),
    path("change_password/", ChangePassword.as_view()),
]
