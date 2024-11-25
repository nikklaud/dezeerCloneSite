import requests
from django.shortcuts import render

def music(request):
   
    api_url = "https://api.deezer.com/chart"

    response = requests.get(api_url)
    if response.status_code == 200:
        data = response.json()
        tracks = data.get('tracks', {}).get('data', [])
    else:
        tracks = []


    return render(request, 'music/music.html', {'tracks': tracks})