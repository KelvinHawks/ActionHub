from rest_framework import serializers
from . import models

class todoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'