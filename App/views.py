from django.http import HttpResponse
from django.shortcuts import render
from django.core.mail import send_mail
from django.shortcuts import render, redirect

def index(request):
    return render(request, "App/index.html")

def contact(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']

        full_message = f"""
Name: {name}
Email: {email}

Message:
{message}
"""

        send_mail(
            subject,
            full_message,
            email,
            ['yourgmail@gmail.com'],
            fail_silently=False,
        )

        return redirect('/')

    return redirect('/')