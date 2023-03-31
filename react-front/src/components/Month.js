import React, { useState, useContext, useRef, useEffect } from "react";
import { Day } from "./Day";
import axios from "axios";
import GlobalContext from "../context/GlobalContext";

export const Month = (props) => {
  const { registedEvents, setRegistedEvent } = 
    useContext(GlobalContext);
  const { month } = props;
  const [flag, setFlag] = useState(true);


  const start_date = String(month[0][0]['$y']) + '-' + ("0" + (month[0][0]['$M']+1)).slice(-2) + '-' + ("0" + month[0][0]['$D']).slice(-2)
  const end_date = String(month[4][6]['$y']) + '-' + ("0" + (month[4][6]['$M']+1)).slice(-2) + '-' + ("0" + month[4][6]['$D']).slice(-2)

  useEffect(()=>{
    console.log("実行")
    get_current_month()
  }, []);

  useEffect(()=>{
    if(flag) {
      get_current_month()
    }
  }, [flag]);

  function get_current_month(){
    const baseURL = "http://localhost:8000/users/1/todos/1/calender";
    axios.get(baseURL,{
      params:{
        'start_date': start_date,
        'end_date': end_date
      }
    }).then((res)=>{
      var response_data = res.data
      var registed_data = []
      // 値をセットしてDay
      response_data.map((val)=>{
        registed_data.push(val)
      })
      setRegistedEvent(registed_data)
      setFlag(false)
      
    })
  }
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );

};