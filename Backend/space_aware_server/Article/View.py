from django.core import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Article as ArticleModel
import json


def get_all_articles():
    users = ArticleModel.objects.all()
    data = serializers.serialize('json', users, fields=("first_name", "last_name", "age"))
    json_data = json.loads(data)
    return Response(json_data, status=status.HTTP_201_CREATED)


class Article(APIView):
    def get(self, request, *args, **kwargs):
        return get_all_articles()
