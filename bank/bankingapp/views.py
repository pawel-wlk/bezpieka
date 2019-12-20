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


def accept_panel(request):
    if not request.user.is_authenticated or not request.user.is_superuser:
        return redirect('/')

    return render(request, "accept_panel.html",
    context={
        'transactions': Transaction.objects.filter(accepted=False).order_by("-date"),
        })

def accept_transaction(request, transid):
    if not request.user.is_authenticated or not request.user.is_superuser:
        return redirect('/')

    Transaction.objects.filter(id=transid).update(accepted=True)

    return redirect('/accept_panel')



def dashboard(request):
    if not request.user.is_authenticated:
        return redirect('/')

    return render(request, "dashboard.html", 
    context={
        'transactions': Transaction.objects.filter(
            Q(from_account=request.user.account) 
                | Q(to_account=request.user.account)
            ).filter(accepted=True).order_by("-date"),
        })

def new_transaction(request):
    if not request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        form = TransactionForm(request.POST)
        if form.is_valid():
            if len(User.objects.filter(username=form.cleaned_data['recipient'])) != 1:
                return render(request, "error.html", {'error': 'Wrong recipient.'})
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
        message = request.POST['message']
        amount = int(request.POST['amount'])
        to_user = User.objects.filter(username=recipient)[0]

        Transaction.objects.create(
            from_account=request.user.account,
            to_account=to_user.account,
            amount=amount,
            message=message
        )
    return redirect('dashboard')


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
    return render(request, 'registration/register.html', {'form': form})
