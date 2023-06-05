# from rest_framework import status
# from rest_framework.test import APITestCase
# from django.urls import reverse
# from .models import Clients
# from .serializers import ClientsSerializer


# class ClientsViewTestCase(APITestCase):
#     def setUp(self):
#         self.client_url = reverse('clients')
#         self.client1 = Clients.objects.create(
#             Client_ID=1,
#             Client_Name='Test Client 1',
#             Client_Email='testclient1@example.com',
#             Client_Phone='555-1234'
#         )
#         self.client2 = Clients.objects.create(
#             Client_ID=2,
#             Client_Name='Test Client 2',
#             Client_Email='testclient2@example.com',
#             Client_Phone='555-5678'
#         )

#     def test_create_client(self):
#         data = {
#             'Client_ID': 3,
#             'Client_Name': 'Test Client 3',
#             'Client_Email': 'testclient3@example.com',
#             'Client_Phone': '555-9012'
#         }
#         response = self.client.post(self.client_url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(Clients.objects.count(), 3)
#         self.assertEqual(Clients.objects.get(
#             Client_ID=3).Client_Name, 'Test Client 3')

#     def test_get_clients_list(self):
#         response = self.client.get(self.client_url)
#         clients = Clients.objects.all()
#         serializer = ClientsSerializer(clients, many=True)
#         self.assertEqual(response.data, serializer.data)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)

#     def test_get_client_details(self):
#         client_id = self.client1.Client_ID
#         response = self.client.get(
#             reverse('clients', kwargs={'Client_ID': client_id}))
#         client = Clients.objects.get(Client_ID=client_id)
#         serializer = ClientsSerializer(client)
#         self.assertEqual(response.data, serializer.data)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)

#     def test_update_client(self):
#         client_id = self.client1.Client_ID
#         data = {'Client_Name': 'Updated Test Client'}
#         response = self.client.put(
#             reverse('clients', kwargs={'Client_ID': client_id}), data, format='json')
#         client = Clients.objects.get(Client_ID=client_id)
#         serializer = ClientsSerializer(client)
#         self.assertEqual(response.data, serializer.data)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)

#     def test_delete_client(self):
#         client_id = self.client1.Client_ID
#         response = self.client.delete(
#             reverse('clients', kwargs={'Client_ID': client_id}))
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(Clients.objects.count(), 1)
