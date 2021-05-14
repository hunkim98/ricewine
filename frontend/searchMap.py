import ssl
import urllib.request


def search_map(search_text):
    client_id = 'znaixfs0cd'  # 클라이언트 ID값
    client_secret = 'IOWWjXsfOITxwgGI7aizrHYsC7Bvmd0G4ZrpRnSH'  # 클라이언트 Secret값
    encText = urllib.parse.quote(search_text)
    url = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query='+encText
    request = urllib.request.Request(url)
    request.add_header('X-NCP-APIGW-API-KEY-ID', client_id)
    request.add_header('X-NCP-APIGW-API-KEY', client_secret)
    context = ssl._create_unverified_context()
    response = urllib.request.urlopen(
        request, context=context)
    rescode = response.getcode()
    if(rescode == 200):
        response_body = response.read()
        return response_body.decode('utf-8')
    else:
        print("Error Code:" + rescode)
