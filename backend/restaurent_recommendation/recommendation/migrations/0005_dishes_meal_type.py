# Generated by Django 5.1.3 on 2024-12-11 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recommendation', '0004_remove_dishes_image_dishimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='dishes',
            name='meal_type',
            field=models.TextField(blank=True, null=True),
        ),
    ]