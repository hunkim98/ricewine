from rest_framework import serializers
from .models import Store, StoreItem


class StoreItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = StoreItem
        fields = ("itemName", "description", "mainImage", "dateIntroduced")


class StoreSerializer(serializers.ModelSerializer):
    items = StoreItemSerializer(many=True, read_only=True)

    class Meta:
        model = Store
        fields = ('id', 'name', 'location',
                  'description', 'address', 'items')
