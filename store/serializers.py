from rest_framework import serializers
from .models import Store, StoreItem, Pub, News, MyLocation


class MyLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyLocation
        fields = '__all__'


class StoreItemSerializer(serializers.ModelSerializer):
    img_url = serializers.SerializerMethodField()
    bottle_url = serializers.SerializerMethodField()

    class Meta:
        model = StoreItem
        fields = ("itemName", "description", "img_url", "bottle_url")

    def get_img_url(self, document):
        request = self.context.get('request')
        img_url = document.mainImage.url
        return request.build_absolute_uri(img_url)

    def get_bottle_url(self, document):
        request = self.context.get('request')
        bottle_url = document.bottleImage.url
        return request.build_absolute_uri(bottle_url)


class StoreSerializer(serializers.ModelSerializer):
    items = StoreItemSerializer(many=True, read_only=True)

    class Meta:
        model = Store
        fields = ('id', 'name', 'location',
                  'description', 'address', 'latitude', 'longditude', 'items', 'visible')


class PubSerializer(serializers.ModelSerializer):
    items = StoreItemSerializer(many=True, read_only=True)

    class Meta:
        model = Pub
        fields = ('id', 'name', 'location',
                  'description', 'address', 'latitude', 'longditude', 'items', 'visible')


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
