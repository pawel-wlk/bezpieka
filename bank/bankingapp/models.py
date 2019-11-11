from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.IntegerField(default=10_000)


@receiver(post_save, sender=User)
def create_user_account(sender, instance, created, **kwargs):
    if created:
        Account.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_account(sender, instance, **kwargs):
    instance.account.save()

class Transaction(models.Model):
    from_user = models.ForeignKey(Account, on_delete=models.DO_NOTHING)
    to_user = models.ForeignKey(Account, on_delete=models.DO_NOTHING)
    amount = models.PositiveIntegerField()

    def save(self, *args, **kwargs):
        self.from_user.balance -= self.amount
        self.to_user.balance += self.amount
        self.from_user.save()
        self.to_user.save()
        super().save(*args, **kwargs)
