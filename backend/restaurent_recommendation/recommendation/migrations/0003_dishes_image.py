# Generated by Django 5.1.3 on 2024-12-03 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recommendation', '0002_dishes'),
    ]

    operations = [
        migrations.AddField(
            model_name='dishes',
            name='image',
            field=models.ImageField(null=True, upload_to='dishes/'),
        ),
    ]
