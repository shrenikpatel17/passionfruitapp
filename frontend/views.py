import re
from django.shortcuts import render

# Create your views here.

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def handle_not_found(request, exception):
    return render(request, 'frontend/404.html')
