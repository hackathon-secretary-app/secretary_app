from fastapi import APIRouter
import controllers.map as ctl
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, Form, FastAPI, Query, Header
from models.regist_item import Regist_Item
#routerによるapiの作成
router = APIRouter()

@router.get("/")
async def root():
 return ctl.get_dbinfo()

# ユーザーの登録
@router.post("/users")
async def create_user():
    pass

# ユーザー情報の取得
@router.get("/users/{user_id}")
async def get_user(user_id: int):
    pass

# ユーザー情報の更新
@router.put("/users/{user_id}")
async def update_user(user_id: int):
    pass

# ユーザー情報の削除
@router.delete("/users/{user_id}")
async def delete_user(user_id: int):
    pass

# ログイン
@router.post("/login")
async def login():
    pass

# todoリストの取得
@router.get("/users/{user_id}/todos")
async def get_todos(user_id: int):
    pass

# 新しいtodoリストの作成
@router.post("/users/{user_id}/todos")
async def create_todo_list(user_id: int):
    pass

# todoリストの更新
@router.put("/users/{user_id}/todos/{todo_id}")
async def update_todo_list(user_id: int, todo_id: int):
    pass

# todoリストの削除
@router.delete("/users/{user_id}/todos/{todo_id}")
async def delete_todo_list(user_id: int, todo_id: int):
    pass

# todoアイテムの取得
@router.get("/users/{user_id}/todos/{id}/items")
async def get_todo_item(user_id: int, id: int ):
    pass

# 新しいtodoアイテムの作成
@router.post("/users/{user_id}/todos/{id}/items")
async def create_todo_item(user_id: int, id: int, pramas:Regist_Item):
    print(pramas)
    ctl.add_items_info(user_id,id,pramas)

# todoアイテムの更新
@router.put("/users/{user_id}/todos/{id}/items/{item_id}")
async def update_todo_item(user_id: int, id: int, item_id: int):
    pass

# todoアイテムの削除
@router.delete("/users/{user_id}/todos/{id}/items/{item_id}")
async def delete_todo_item(user_id: int, id: int, item_id: int):
    pass

# 共有ユーザーの取得
@router.get("/todos/{todo_id}/shared-users")
async def get_shared_user(todo_id: int):
    pass

# 共有ユーザーの追加
@router.post("/todos/{todo_id}/shared-users")
async def add_shared_user(todo_id: int):
    pass

# 共有ユーザーの削除
@router.delete("/todos/{todo_id}/shared-users")
async def add_shared_user(todo_id: int):
    pass
