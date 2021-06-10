from rest_framework import viewsets, permissions
from .serializers import StoreSerializer, StoreItemSerializer, PubSerializer, NewsSerializer, MyLocationSerializer
from .models import MyLocation, Store, Pub, StoreItem, News


# Create your views here.
class MyLocationView(viewsets.ModelViewSet):
    serializer_class = MyLocationSerializer
    queryset = MyLocation.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)


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


class NewsView(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    queryset = News.objects.all()
    permissions_classes = (permissions.IsAuthenticatedOrReadOnly,)
