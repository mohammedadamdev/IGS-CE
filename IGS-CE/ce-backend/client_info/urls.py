from django.urls import path
from .views import ClientsView,DataGridView

urlpatterns = [
    path("", ClientsView.as_view()),
    path("<int:Client_ID>/update", ClientsView.as_view()),
    path("<int:Client_ID>/delete", ClientsView.as_view()),
    path("datagrid/",DataGridView.as_view()),
    path("datagrid/<int:Client_ID>/update",DataGridView.as_view()),
    path("datagrid/<int:Client_ID>/delete",DataGridView.as_view()),
]



