"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from store import views
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'stores', views.StoreView, 'store')
router.register(r'storeItems', views.StoreItemView, 'storeItem')
router.register(r'pubs', views.PubView, 'pub')
router.register(r'news', views.NewsView, 'news')
router.register(r'myLocation', views.MyLocationView, 'myLocation')


def okay(request):
    return HttpResponse('pretend-binary-data-here', content_type='image/jpeg')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auto', include('rest_framework.urls')),
    path('', include('frontend.urls')),
    path('robots.txt/', lambda x: HttpResponse("User-Agent: *\nDisallow: /admin/\nDisallow: /api/\nDisallow: /static/",
                                               content_type="text/plain")),
    path('favicon.ico', okay),
]
