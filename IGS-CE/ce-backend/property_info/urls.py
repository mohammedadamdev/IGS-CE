from django.urls import path
from .views import PropertyView

urlpatterns = [
    path("", PropertyView.as_view()),
    path("<int:Property_ID>/update", PropertyView.as_view()),
    path("<int:Property_ID>/delete", PropertyView.as_view()),
]
