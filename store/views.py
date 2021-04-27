from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import StoreSerializer
from .models import Store

# Create your views here.


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)
