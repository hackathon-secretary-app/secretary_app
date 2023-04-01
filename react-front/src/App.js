import './App.css';
import SideBar from './components/SideBar'
import Header from './components/Header.tsx'
//import {useState} from "react"

import { useState, useEffect, useContext } from "react";

import { getMonth } from "./util";
import { CalendarHeader } from "./components/CalendarHeader";
import { Month } from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import { EventModal } from "./components/EventModal";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './views/Login';
import Calender from './views/Calender';

function App() {
   //useStateでデータを定義。初期値をfalseに
  const [state,setState] = useState(false)

//関数のchangeStateを定義。引数のisStateは子コンポーネントで実行した際に取ってくる。
  const changeState = (isState) => {
    setState(isState)
  }

  //
  
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [active_api, setActiveAPI ] = useState(true);

  useEffect(() => {;
  }, []);

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Route path="/" components={Login} />
          <Login />
      </BrowserRouter> */}
      
      <Header/>
      {state && <SideBar state={state} />}
      <>
        {showEventModal && <EventModal />}
        < Calender />
      </>
    </div>
    
  );
}

export default App;
