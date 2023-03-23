## プログラムソースの利用方法
### React

### Python
#### setupについて
前提：pythonのいくつかパッケージを入れる上で必要なパッケージ管理ツールpipが導入されているのか確認してください．

Windows:
    python -m pip install パッケージ名

    もしくは，
    python -m pip install -r requirement.txt

mac & Linux:
    pip install パッケージ名

    もしくは，
    pip install -r requirement.txt

必要なパッケージ
    ・fastapi
    ・uvicorn
    ・sqlalchemy
    ・requests（必要な気がます）
    これでエラーが生じた場合，追記しますので確認お願いします．

#### fastapiについて
fastAPIは，クライアントからのリクエストに対してルーティングするrouter，受け取ったリクエストに対する処理内容を定義するcontrollerより構成しています．

//API作成方法////////////////////////////
１．routers/map.py エンドポイントを設定

    router."HTTPメソッド"("エンドポイント"):
        return ctl."controller関数名"

２．controllers/map.py 処理内容を提示
    def "controller関数名":
        ．．．

////////////////////////////////

#### DBについて
DB：MySQLを用いている
Pythoh側のモジュールとしては，MySQLを利用している

//DB処理の実行///////////////////
with connection:
    with connectin.cursor() as cursor:
        sql = "SQL文を定義"
        cursor.execute(sql,sql文内に挿入するデータ)
    
    cursor.commit()
    ※update,insert,deleteなどDB内の情報を変化させる場合は，以下のコミットが必要
    
/////////////////////////////////

### MySQL構築手順
[windowsの方](https://prog-8.com/docs/mysql-env-win)

[macの方](https://prog-8.com/docs/mysql-env)

これらの手順通りに進めてください
    
※注意
-コマンドプロンプトを管理者として実行してください

## テストデータ作成
#### MySQLにログイン

    mysql -u root -p

その後、パスワードを入力。
#### データベース（test_db）の指定

    USE test_db;

#### テーブルの作成。
[テーブル設計書](https://drive.google.com/file/d/1IYFeg4XWIjRgNK9trMXdZjcogy4zY_VL/view)を
コピペして５つのテーブルを作成。
#### テーブルの確認

    SHOW TABLES

#### データ挿入
M_User

    INSERT INTO M_User (username, address, password, created_at, updated_at) 
    VALUES ('user1', 'Tokyo', 'password1', '2023-03-21', '2023-03-23'),
           ('user2', 'Osaka', 'password2', '2023-03-22', '2023-03-23'),
           ('user3', 'Kyoto', 'password3', '2023-03-23', '2023-03-23');

T_Todo

    INSERT INTO T_Todo (creator_id, name, share_flag, color_code, updated_at, created_at, updater_id) 
    VALUES (1, 'Todo1', true, '#FF0000', '2023-03-22', '2023-03-21', 2),
           (2, 'Todo2', false, '#00FF00', '2023-03-23', '2023-03-22', 1),
           (1, 'Todo3', true, '#0000FF', '2023-03-23', '2023-03-23', 2);

T_Task

    INSERT INTO T_Task (creator_id, todo_id, task_name, start_datetime, deadline_datetime, completion_flag, updated_datetime, updater_id) 
    VALUES (1, 1, 'Task1', '2023-03-25', '2023-03-28', false, '2023-03-27', 2),
           (2, 1, 'Task2', '2023-03-26',"C:\Users\esnir\hackthon\secretary_app\README.md" '2023-03-29', false, '2023-03-28', 1),
           (1, 2, 'Task3', '2023-03-27', '2023-03-30', true, '2023-03-29', 2);

T_Share

    INSERT INTO T_Share (sharer_id, todo_id, todo_permission, registrant_id) 
    VALUES (2, 1, 0.5, 1),
           (3, 1, 0.3, 1),
           (4, 2, 1, 2);

T_Delete

    INSERT INTO T_DELETE (creater_id, todo_id, task_id, task_name, start_datetime, deadline_datetime, completion_flag, deleted_at, deleter_id) 
    VALUES (1, 1, 1, 'task1', '2022-03-01', '2022-03-15', false, '2022-03-30', 2),
           (1, 2, 2, 'task2', '2022-04-01', '2022-04-15', true, '2022-04-30', 2),
           (2, 1, 3, 'task3', '2022-05-01', '2022-05-15', false, '2022-05-30', 3);

#### ログアウト

    exsit;







