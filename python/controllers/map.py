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

#DBの情報を取得する
#def get_database(db:Session):
#    db.query()