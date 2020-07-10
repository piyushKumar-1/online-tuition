from .api import QueryViewset
from rest_framework import routers



router = routers.DefaultRouter()
router.register('api/query', QueryViewset, 'Queries')


urlpatterns = router.urls
