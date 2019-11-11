from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.db.models import Q

from .forms import RegisterForm, TransactionForm
from .models import Transaction


def index(request):
    if request.user.is_authenticated:
        return redirect('/dashboard')
    return render(request, "index.html")


def dashboard(request):
    if not request.user.is_authenticated:
        return redirect('/')

    return render(request, "dashboard.html", 
    context={
        'transactions': Transaction.objects.filter(
            Q(from_account=request.user.account) 
                | Q(to_account=request.user.account)
            ).order_by("-date"),
        })

def new_transaction(request):
    if not request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        form = TransactionForm(request.POST)
        if form.is_valid():
            return render(request, 'confirmation.html', {'transaction': form.cleaned_data})
    else:
        form = TransactionForm()
    return render(request, 'new_transaction.html', {'form': form})

def confirm_transaction(request):
    if not request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        # perform transaction
        recipient = request.POST['recipient']
        amount = int(request.POST['amount'])

        print(recipient)
        print(amount)
        to_user = User.objects.filter(username=recipient)
        print(to_user)

        if len(to_user) != 1:
            print("wrong recipient")

        Transaction.objects.create(
            from_account=request.user.account,
            to_account=to_user[0].account,
            amount=amount
        )
    return redirect('dashboard')


def forgot_password(request):
    return render(request, "forgot_password.html")


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('dashboard')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})
