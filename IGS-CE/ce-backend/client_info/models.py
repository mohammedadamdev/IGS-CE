from django.db import models
from multiselectfield import MultiSelectField
from property_info.models import Property

# Create your models here.

class Clients(models.Model):
    Client_ID = models.AutoField(primary_key=True)
    Client_PropertyID = models.ForeignKey(
        Property, on_delete=models.CASCADE, null=True)
    Client_FullName = models.CharField(max_length=30,null=True)
    Client_MobileNumber = models.BigIntegerField(null=True)
    Client_EMail = models.EmailField(null=True)
    Client_Block = models.CharField(max_length=10, null=True)
    Client_FlatNo = models.CharField(max_length=10, null=True)
    Client_PropertyTitle = models.CharField(max_length=30,null=True)
    Client_PropertyType = models.CharField(max_length=30,null=True)
    Client_ListingType = models.CharField(max_length=30, null=True)
    Client_Location = models.CharField(max_length=30,null=True)
    Client_Address = models.CharField(max_length=200,null=True)
    Client_ListingPrice = models.DecimalField(max_digits=7, decimal_places=2,null=True)
    Client_BHK = models.CharField(max_length=10, null=True)
    Client_Status = models.CharField(max_length=10, null=True)
    Client_ParkingLot = models.CharField(max_length=30,null=True)
    Client_ConstructionSqft = models.PositiveIntegerField(null=True)
    Client_LandSqft = models.PositiveIntegerField(null=True)
    Client_ShortDesc = models.TextField(max_length=240, null=True)
    Client_LongDesc = models.TextField(max_length=4000, null=True)
    Amenities_List = [
        ('garden', 'Garden'),
        ('security_cameras', 'Security Cameras'),
        ('laundry', 'Laundry'),
        ('internet', 'Internet'),
        ('pool', 'Pool'),
        ('video_surveillance', 'Video Surveillance'),
        ('jacuzzi', 'Jacuzzi'),
        ('elevator', 'Elevator'),
        ('vigilance', 'Vigilance'),
        ('dish', 'Dish'),
        ('solar_panel', 'Solar Panel'),
        ('garage', 'Garage'),
        ('parking','Parking')
    ]
    Client_PropertyAmenities = MultiSelectField(
        max_length=120, choices=Amenities_List,null=True)
    Client_ImgURL = models.URLField(max_length=5000,null=True)
    Client_CreatedAt = models.DateTimeField(auto_now_add=True,null=True)
    Client_UpdatedAt = models.DateTimeField(auto_now=True,null=True)

    class Meta:
        db_table = 'Clients'
        verbose_name_plural = 'Clients'
        ordering = ['Client_ID']

    def __str__(self):
        return f"{self.Client_FullName}"
