from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import StoreSerializer, StoreItemSerializer
from .models import Store, StoreItem


# Create your views here.


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)


class StoreItemView(viewsets.ModelViewSet):
    serializer_class = StoreItemSerializer
    queryset = StoreItem.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)
