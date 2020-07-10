from rest_framework import serializers
from .models import QueryModel

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = QueryModel
        fields = "__all__"
