from rest_framework import viewsets, permissions
from .serializers import StoreSerializer, StoreItemSerializer, PubSerializer
from .models import Store, StoreItem, Pub


# Create your views here.


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)


class StoreItemView(viewsets.ModelViewSet):
    serializer_class = StoreItemSerializer
    queryset = StoreItem.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)


class PubView(viewsets.ModelViewSet):
    serializer_class = PubSerializer
    queryset = Pub.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)
