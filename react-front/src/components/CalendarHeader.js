import dayjs from "dayjs";
import React, { useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";
import axios from "axios";
import { getMonth } from "../util";

export const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
    get_month_data();
  };
  const handelNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    // 現在の月を取得
    setMonthIndex(dayjs().month());
  };

  async function get_month_data(){
    const baseURL = "http://localhost:8000/users/1/todos/1/month/items"
    const today = new Date()
    console.log(getMonth(monthIndex))
    const get_current_data = getMonth(monthIndex-1)
    console.log(get_current_data[0][0]['$D'])
    // axios.get(baseURL,{
    //   params: {
    //     // ここにクエリパラメータを指定する
        
    //   }
    // })
  }
  return (
    <div className="px-4 py-2 flex flex-wrap items-center">
      <div className="flex-shrink-0">
        <h1 className="text-xl text-gray-500 font-bold">Calendar</h1>
      </div>
      <div className="flex-shrink-0 mt-3 sm:mt-0 ml-auto">
        <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
          Today
        </button>
      </div>
      <div className="flex-shrink-0 mt-3 sm:mt-0 flex items-center">
        <button onClick={handlePrevMonth}>
          <span className="cursor-pointer text-gray-600 mx-2">
            <MdChevronLeft />
          </span>
        </button>
        <h2 className="text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
        <button onClick={handelNextMonth}>
          <span className="cursor-pointer text-gray-600 mx-2">
            <MdChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};