from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"


class ChangePasswordSerializer(serializers.Serializer):
    # model = User
    old_password = serializers.CharField(required=True)
    new_password1 = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)

    # class Meta:
    #     model = User
    #     fields = ["Mobile_No","old_password", "new_password1", "new_password2"]


{
    "Mobile_No": 917356556336,
    "old_password": "changeme",
    "new_password1": "test",
    "new_password2": "test"
}
