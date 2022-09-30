from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer
from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserProfile
from .forms import *
from django.views import View
from django.core import serializers
import json
from .models import *
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.contrib.auth.models import User


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        profile = UserProfile()
        profile.user = user
        profile.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class AllUsers(APIView):
    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        data = serializers.serialize('json', users, fields="username")
        json_data = json.loads(data)
        return Response(json_data, status=status.HTTP_200_OK)


class AllProfiles(APIView):
    def get(self, request, *args, **kwargs):
        users = UserProfile.objects.all()
        data = serializers.serialize('json', users, fields="__all__")
        json_data = json.loads(data)
        return Response(json_data, status=status.HTTP_200_OK)


class UserView(APIView):
    def get(self, request, *args, **kwargs):
        payload = request.data
        print(payload)
        target_id = payload['id']
        result = {}
        user = User.objects.get(pk=target_id)
        profile = UserProfile.objects.get(user_id=target_id)
        result['score'] = profile.score
        result['name'] = user.username
        return JsonResponse(data=result, status=status.HTTP_200_OK)


class RankedUserView(APIView):
    def get(self, request, *args, **kwargs):
        profiles = UserProfile.objects.all().order_by('-score')
        data = json.loads(serializers.serialize('json', profiles, fields=("score", "user")))
        result = []
        print(data)
        for profile in data:
            item = profile['fields']
            target_id = item['user']
            name = User.objects.get(pk=target_id).username
            item['name'] = name
            result.append(item)
        return Response(data=result, status=status.HTTP_200_OK, )
