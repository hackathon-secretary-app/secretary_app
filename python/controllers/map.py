import sys
from sqlalchemy.orm import Session
#導入する関数，処理を定義する

def get_test():
    return {"greeting":"Hello world"}

#DBの情報を取得する
#def get_database(db:Session):
#    db.query()