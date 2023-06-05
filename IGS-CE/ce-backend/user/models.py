from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager
# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user


class User(AbstractUser):
    first_name = None
    last_name = None
    username = None
    is_superuser = None
    is_staff = None
    User_Id = models.AutoField(primary_key=True)
    Full_Name = models.CharField(max_length=25, blank=False, null=False)
    Construction_Name = models.CharField(
        max_length=50, blank=True, null=False)
    Mobile_No = models.BigIntegerField(unique=True, blank=False, null=False)
    GST_No = models.CharField(max_length=20, blank=True, null=True)
    Role = models.CharField(max_length=30, blank=False, null=False)
    City = models.CharField(max_length=30, blank=False, null=False)
    Address = models.CharField(max_length=100, blank=False, null=False)
    Created_By = models.CharField(max_length=30, blank=False, null=False)
    Updated_BY = models.CharField(max_length=30, blank=False, null=False)
    Created_At = models.DateTimeField(auto_now_add=True)
    Updated_At = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "Mobile_No"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    @property
    def id(self):
        return self.User_Id

    class Meta:
        db_table = 'User'

    def __str__(self) -> str:
        return str(self.Mobile_No)
