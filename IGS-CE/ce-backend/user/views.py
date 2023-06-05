from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ChangePasswordSerializer, UserSerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
# Create your views here.


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, User):
        # Use the correct attribute for the primary key
        # user_id = getattr(User, 'User_Id')
        token = super().get_token(User)
        token['full_name'] = User.Full_Name
        token['role'] = User.Role
        return token


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class UserAuthenticationView(APIView):

    def post(self, request):
        mobile_no = request.data.get('Mobile_No')
        password = request.data.get('password')
        print(mobile_no, password)
        user = authenticate(request, Mobile_No=mobile_no, password=password)
        if user is None:
            return Response({'error': 'requested user does not exists'}, status=status.HTTP_400_BAD_REQUEST)
        login(request, user)
        return Response({'response': 'login successfull'}, status=status.HTTP_200_OK)


{
    "Mobile_No": 917356556336,
    "password": "test"
}

{
    "old_password": "changeme",
    "new_password1": "test",
    "new_password2": "test"
}


class UserRegistrationView(APIView):

    def post(self, request):
        data = request.data
        mobile_no = request.data.get('mobile_no')
        password = request.data.get('password1')
        user_exists = User.objects.filter(Mobile_No=mobile_no)
        if user_exists:
            result = 'User already exists'
        elif request.data['password1'] != request.data['password2']:
            result = 'Password Does not match'
        else:
            User.objects.create_user(
                Mobile_No=mobile_no, password=password, Full_Name=data["full_name"], email=data['email'], Role=data['role'], Construction_Name=data['construction_name'], GST_No=data["gst_no"], City=data['city'], Address=data['address'])
            result = 'User created successfully'
        return Response({'response': result})

    def get(self, request, User_ID=None, *args, **kwargs):
        try:
            if User_ID:
                data = User.objects.get(Use_ID=User_ID)
                serializer = UserSerializer(data)
            else:
                data = User.objects.all()
                serializer = UserSerializer(data, many=True)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({"Response": "Users Data not Found"}, status=status.HTTP_404_NOT_FOUND)


class ChangePassword(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        data = request.data
        serializer = ChangePasswordSerializer(data=data)
        if serializer.is_valid():
            user = request.user
            old_password = data['old_password']
            new_password = data['new_password1']
            if not user.check_password(old_password):
                return Response({'response': 'old password incorrect'}, status=status.HTTP_400_BAD_REQUEST)
            user.set_password(new_password)
            user.save()
            return Response({'response': 'password changed successfully'})
        return Response({'response':  serializer.data})


class Userlogout(APIView):
    def post(self, request):
        logout(request)
        return Response({'response': 'logout successfull'})
