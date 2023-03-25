from fastapi import FastAPI
from pydantic import BaseModel  # リクエストbodyを定義するために必要
from typing import List  # ネストされたBodyを定義するために必要

app = FastAPI()


# リクエストbodyを定義
class Regist_Item(BaseModel):
    title: str
    start_date: str
    deadline_date:str
    completion_flag:bool
