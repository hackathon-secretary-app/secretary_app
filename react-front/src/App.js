import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar'
import Header from './components/Header'
import {useState} from "react"
import axios from "axios";

function App() {
   //useStateでデータを定義。初期値をfalseに
  const [state,setState] = useState(false)

//関数のchangeStateを定義。引数のisStateは子コンポーネントで実行した際に取ってくる。
  const changeState = (isState) => {
  　setState(isState)
  }

  async function test_get(){
    const header = {'Content-Type': 'application/json'}
    axios.get("http://localhost:8000/",{'Content-Type': 'application/x-www-form-urlencoded'}).then(function(res){
      console.log(res);
    })
  }
  test_get()
  return (
    <div className="App">
      <Header changeState={changeState} state={state}/>
      {state && <SideBar state={state} />}

    </div>
  );
}

export default App;
