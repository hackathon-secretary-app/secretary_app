import sys
from sqlalchemy.orm import Session
from models.Test import Test
from mysql import connection

#導入する関数，処理を定義する

def get_test(db :Session):
    test = db.query(Test).first()
    print(test)
    return {"greeting":"Hello world"}

def get_dbinfo():
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM M_Test"
            cursor.execute(sql)
            result = cursor.fetchall()
            print(result)
            return result


#DBの情報を取得する
#def get_database(db:Session):
#    db.query()