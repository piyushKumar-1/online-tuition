from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def index2(request,k,j):
    return render(request, 'index.html')


def index3(request,k):
    return render(request, 'index.html')