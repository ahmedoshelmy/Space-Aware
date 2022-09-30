from django.core import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Article as ArticleModel
import json
from rest_framework import status
from .serializers import ArticleSerializer


def get_all_articles():
    articles = ArticleModel.objects.all()
    data = serializers.serialize('json', articles, fields=("title", "description", "image", "resource"))
    json_data = json.loads(data)
    return Response(json_data, status=status.HTTP_201_CREATED)


def add_article(payload):
    print(payload)
    serialized_article = ArticleSerializer(data=payload)
    if serialized_article.is_valid(raise_exception=True):
        serialized_article.save()
    return Response(serialized_article.data)


class ArticleView(APIView):
    def get(self, request):
        return get_all_articles()

    def post(self, request):
        return add_article(request.data)
