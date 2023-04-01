import React, { useState, useEffect, useContext } from 'react'
import {CalendarHeader} from '../components/CalendarHeader'
import { getMonth } from '../util';
import GlobalContext from '../context/GlobalContext';
import { Month } from '../components/Month';

function Calender() {
// ここの実行がループを意味だしている
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex ,showEventModal} = useContext(GlobalContext);
  const [active_api, setActiveAPI] = useState(false)

  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])

  return (
    <div className="h-screen flex flex-col">
    <CalendarHeader />
    <div className="flex flex-1">
      <Month month={currentMonth} active_api={active_api} />
    </div>
  </div>
  )
}

export default Calender