import React from 'react'
import '../style/Login.css'

const Login = () => {

//   セッション情報を確認する
  return (
    <div>
        <div className='content_area'>
            <div>
                <h2>ずんだもん</h2>
            </div>
            <div>
                <div>
                    <h3>ユーザID</h3>
                    <input type={"text"} />
                </div>
                <div>
                    <h3>パスワード</h3>
                    <input type={"text"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login