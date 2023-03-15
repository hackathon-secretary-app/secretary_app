from fastapi import APIRouter
import controllers.map as ctl

from fastapi import Depends
#routerによるapiの作成
router = APIRouter()

@router.get("/")
async def root():
 return ctl.get_test()