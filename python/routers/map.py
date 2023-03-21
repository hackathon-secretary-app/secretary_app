from fastapi import APIRouter
import controllers.map as ctl
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, Form, FastAPI, Query, Header
#routerによるapiの作成
router = APIRouter()

@router.get("/")
async def root():
 return ctl.get_dbinfo()