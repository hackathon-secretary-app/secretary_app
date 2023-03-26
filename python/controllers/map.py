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
            sql+= "  (creator_id, todo_id, task_name, start_datetime, deadline_datetime,"
            sql+= "  completion_flag, updated_datetime, updater_id) "
            sql+= "VALUES "
            sql+=f" ({user_id}, {todo_id}, '{params.title}', '{params.start_date}','{params.deadline_date}', "
            sql+=f" {params.completion_flag}, NOW(), {user_id} )"
            print(sql)
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
    finally:
        connection.commit()
        cursor.close()

#controllers.map
#指定月の情報取得
def get_month(user_id, todo_id,start_date,end_date):
    try:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM T_Task "
            sql+= "WHERE "
            # sql+=f" creator_id={user_id} AND todo_id={todo_id} AND "
            sql+=f" (start_datetime BETWEEN '{start_date}' AND '{end_date}') OR "
            sql+=f" (deadline_datetime BETWEEN '{start_date}' AND '{end_date}') "
            print(sql)
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            return result
    finally:
        cursor.close()
#DBの情報を取得する
#def get_database(db:Session):
#    db.query()
