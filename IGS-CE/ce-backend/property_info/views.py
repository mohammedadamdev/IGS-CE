from django.shortcuts import render
from .serializers import PropertySerializer, PropertySerializerID
from .models import Property
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class PropertyView(APIView):
    serializer_class = PropertySerializer

    def get(self, request, Property_ID=None):
        try:
            if Property_ID:
                data = Property.objects.get(Property_ID=Property_ID)
                serializer = PropertySerializerID(data)
            else:
                data = Property.objects.all()
                serializer = PropertySerializerID(data, many=True)
            return Response(serializer.data)
        except Property.DoesNotExist:
            return Response({"Response":"Property Data Not Found"},status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        data = request.data
        serializer = PropertySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"Response": "Property Data Saved Successfully", "data": serializer.data},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, Property_ID):
        data = request.data        
        try:
            PropertyData = Property.objects.get(Property_ID=Property_ID)
            serializer = PropertySerializerID(instance=PropertyData, data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({"Response": "Property Data Updated Successfully", "data": serializer.data},status=status.HTTP_200_OK)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        except Property.DoesNotExist:
            return Response({"Response": "Property Data Not Found"},status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, Property_ID):
        try:
            PropertyData = Property.objects.get(Property_ID=Property_ID)
            PropertyData.delete()
            return Response({"Response": "Property Data Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
        except Property.DoesNotExist:
            return Response({"Response": "Property Data Not Found"},status=status.HTTP_404_NOT_FOUND)