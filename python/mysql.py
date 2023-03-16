import pymysql.cursors
from config.env import USER_NAME,PASSWORD,HOST,DB_NAME

# データベースに接続
connection = pymysql.connect(host="localhost",
                             user=USER_NAME,
                             password=PASSWORD,
                             database=DB_NAME,
                             cursorclass=pymysql.cursors.DictCursor)