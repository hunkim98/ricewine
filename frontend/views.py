from django.shortcuts import render
from .searchMap import search_map
from django.http import HttpResponse
import json
from django.http.response import JsonResponse
import os


def index(request):
    if(os.path.exists('frontend/static/frontend/main.js')):
        print('opening main.js')
        return render(request, 'frontend/index.html')
    else:
        print('opening main_copy.js')
        return render(request, 'frontend/index_copy.html')


def getLocation(request):
    if request.method == 'GET':
        if(request.GET):
            id = request.GET['id']
            apiData = search_map(id)
            jsonData = json.loads(apiData)
            if (jsonData['addresses']):  # check if the address is valid
                jsonData = jsonData['addresses'][0]
                latLong = [float(jsonData['x']), float(jsonData['y'])]
                print(latLong)
                return JsonResponse(latLong, safe=False)
            else:
                return JsonResponse([], safe=False)
    if request.method == 'POST':
        location_data = json.loads(request.body)['address']
        jsonData = json.loads(search_map(location_data))
        if (jsonData['addresses']):  # check if the address is valid
            jsonData = jsonData['addresses'][0]
            latLong = [float(jsonData['x']), float(jsonData['y'])]
            print(latLong)
            return JsonResponse(latLong, safe=False)
        else:
            return JsonResponse([], safe=False)

    return HttpResponse("hello")
