import './App.css';
import SideBar from './components/SideBar'
import Header from './components/Header'
//import {useState} from "react"
import axios from "axios";

import { useState, useEffect, useContext } from "react";

import { getMonth } from "./util";
import { CalendarHeader } from "./components/CalendarHeader";
import { CalendarSidebar } from "./components/CalendarSidebar.js";
import { Month } from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import { EventModal } from "./components/EventModal";

function App() {
   //useStateでデータを定義。初期値をfalseに
  const [state,setState] = useState(false)

//関数のchangeStateを定義。引数のisStateは子コンポーネントで実行した際に取ってくる。
  const changeState = (isState) => {
    setState(isState)
  }

  //
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  
  async function test_get(){
    const header = {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
    axios.get("http://localhost:8000",header).then(function(res){
      console.log(res);
    })
  }
  test_get()
  return (
    <div className="App">
      <Header changeState={changeState} state={state} />
      {state && <SideBar state={state} />}
      <>
        {showEventModal && <EventModal />}
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <CalendarSidebar />
            <Month month={currentMonth} />
          </div>
        </div>
      </>
    </div>
    
  );
}

export default App;
