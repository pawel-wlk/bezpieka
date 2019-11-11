from django.shortcuts import render

def index(request):
  return render(request, "index.html")

def forgot_password(request):
  return render(request, "forgot_password.html")

def register(request):
  return render(request, "register.html")


