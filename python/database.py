#sqlalchemyの設定なので基本使いません．

from config.env import USER_NAME,PASSWORD,HOST,DB_NAME
from sqlalchemy import create_engine
#from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

# バインディング
DATABASE = 'mysql+pymysql://%s:%s@%s/%s?charset=utf8' % (
    USER_NAME,
    PASSWORD,
    HOST,
    DB_NAME,
)
print(DATABASE)
# DBとの接続
ENGINE = create_engine(
    DATABASE,
    #自動生成されたSQLを吐き出すようにする
    echo=True
)

# session変数にsessionmakerインスタンスを格納
session = scoped_session(
    # ORマッパーの設定。自動コミットと自動反映はオフにする
    sessionmaker(
        autocommit=False,
        autoflush=False,
        bind=ENGINE
    )
)

Base = declarative_base()
Base.query = session.query_property()

def get_db():
    try:
        db = session()
        yield db
    finally:
        db.close()