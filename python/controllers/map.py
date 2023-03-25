import sys
from sqlalchemy.orm import Session
from models.Test import Test
from mysql import connection

#導入する関数，処理を定義する


def get_dbinfo():
    try:
        with connection.cursor() as cursor:
            return ("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    finally:
        cursor.close()  

def add_items_info(user_id,todo_id,params):
    print(type(params.title))
    try:
        with connection.cursor() as cursor:
            sql = "INSERT INTO "
            sql+= "T_Task "
            sql+="  (creator_id, todo_id, task_name, start_datetime, deadline_datetime,"
            sql+="  completion_flag, updated_datetime, updater_id) "
            sql+="VALUES "
            sql+=f" ({user_id}, {todo_id}, '{params.title}', '{params.start_date}','{params.deadline_date}', "
            sql+=f" {params.completion_flag}, NOW(), {user_id} )"
            print(sql)
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
    finally:
        connection.commit()
        cursor.close()
#DBの情報を取得する
#def get_database(db:Session):
#    db.query()
