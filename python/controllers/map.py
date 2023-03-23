import sys
from sqlalchemy.orm import Session
from models.Test import Test
from mysql import connection

#導入する関数，処理を定義する

def get_dbinfo():
    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM M_Test"
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            return result
    finally:
        cursor.close()

#ユーザー情報取得
def get_user_by_id(user_id):
    try:
        with connection.cursor() as cursor:
            sql = f"SELECT * FROM M_User WHERE id = {user_id}"
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            return result
    finally:
        cursor.close()

# todoリストの取得
def get_todolist_by_id(user_id):
    try:
        with connection.cursor() as cursor:
            sql = f"SELECT * FROM T_Todo WHERE creator_id = {user_id};"
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            return result
    finally:
        cursor.close()

# todoアイテムの取得
def get_todoitem_by_id(id):
    try:
        with connection.cursor() as cursor:
            sql = f"SELECT * FROM T_Task WHERE  todo_id = {id};;"
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            return result
    finally:
        cursor.close()




#DBの情報を取得する
#def get_database(db:Session):
#    db.query()