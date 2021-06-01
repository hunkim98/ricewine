from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index),
    path('getLocation/', views.getLocation),
    path('about', views.index),
    path('contact', views.index),
    path('news', views.index)
]
# 일일히 입력해줘야 한다
