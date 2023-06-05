from django.db import models
from multiselectfield import MultiSelectField
# Create your models here.


class Property(models.Model):
    Property_ID = models.AutoField(primary_key=True)
    PropertyTitle = models.CharField(max_length=50)
    PropertyType = models.CharField(max_length=100)
    Property_ListingType = models.CharField(
        max_length=100)
    Property_Location = models.CharField(max_length=100)
    Property_Address = models.CharField(max_length=200)
    Property_OverallSqft = models.PositiveIntegerField()
    Property_Blocks = models.CharField(max_length=10)
    Property_Floors = models.PositiveIntegerField()
    Property_Flats = models.PositiveIntegerField()
    Property_1BHK = models.PositiveIntegerField()
    Property_2BHK = models.PositiveIntegerField()
    Property_3BHK = models.PositiveIntegerField()
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
    Property_Amenities = MultiSelectField(
        max_length=120, choices=Amenities_List)
    Property_ImgURL = models.URLField(max_length=5000)
    Property_CreatedAt = models.DateTimeField(auto_now_add=True, null=True)
    Property_UpdatedAt = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        db_table = 'Property'
        verbose_name_plural = 'Property'
        ordering = ['Property_ID']

    def __str__(self):
        return f"{self.PropertyTitle}"
