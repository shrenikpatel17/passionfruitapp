# Generated by Django 4.0.1 on 2022-08-11 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_results'),
    ]

    operations = [
        migrations.AddField(
            model_name='results',
            name='tips',
            field=models.TextField(default=''),
        ),
    ]