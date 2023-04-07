## プログラムソースの利用方法
### React
npmの導入

パッケージインストール
    npm install パッケージ名
    
必要なパッケージ
    ・axios
    ・dayjs
    ・react-icons
    ・tailwindcss
    ・autoprefixer
    ・postcss
    ・react-router-dom



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









