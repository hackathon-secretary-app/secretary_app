from fastapi import APIRouter
import controllers.map as ctl
from database import get_db
from sqlalchemy.orm import Session
from fastapi import Depends
#routerによるapiの作成
router = APIRouter()

@router.get("/")
async def root(db: Session = Depends(get_db)):
 return ctl.get_test()