import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export const Day = (props) => {
  const { day, rowIdx } = props;
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent, registedEvents, setRegistedEvent } =
    useContext(GlobalContext);

  // 今日の日付を色付けする
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  // 登録データを日付が一致する日に表示
  useEffect(() => {
    const events = registedEvents.filter(
      evt => {
        const evtStartDate = dayjs(evt.start_datetime).format("DD-MM-YY");
        const evtDeadlineDate = dayjs(evt.deadline_datetime).format("DD-MM-YY");
        const dayFormatted = day.format("DD-MM-YY");
        return evtStartDate === dayFormatted || evtDeadlineDate === dayFormatted;
      }
    );
    setDayEvents(events);
  }, [registedEvents, day]);

  // start_datetime, deadline_datetimeに応じてクラスを返す関数
  const getEventClass = (evt) => {
    const evtStartDate = dayjs(evt.start_datetime).format("DD-MM-YY");
    const evtDeadlineDate = dayjs(evt.deadline_datetime).format("DD-MM-YY");
    const dayFormatted = day.format("DD-MM-YY");
    if (evtDeadlineDate === dayFormatted) {
      return "bg-red-100";
    } else if (evtStartDate === dayFormatted) {
      return "bg-blue-100";
    } else {
      return "";
    }
  };


  return (
    <div className="border-2 border-gray-300 flex flex-col">
      <div
        className={`flex flex-col items-center ${
          day.day() === 6 ? 'bg-blue-300' : day.day() === 0 ? 'bg-red-300' : 'bg-gray-300'
        }`}
      >
        {/* 1行目に曜日を表示 */}
        {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
      </div>

      <div className="flex flex-col items-center">
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </div>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate ${getEventClass(
              evt
            )}`}
          >
            <div className="flex items-center justify-between w-full">
  <div className="w-4/5">
    <p className="line-clamp-2 h-16 pt-1 pb-1 border-0 text-gray-600 text-xl font-semibold overflow-hidden whitespace-normal break-all border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 text-left">
      {evt.task_name}
    </p>
  </div>
  <div className="flex items-center w-1/5">
    <label htmlFor={`completion-${evt.id}`} className="cursor-pointer flex items-center">
      <input
        id={`completion-${evt.id}`}
        type="checkbox"
        name={`completion-${evt.id}`}
        checked={evt.completion_flag}
        required
        onChange={(e) => evt.setCompletion(e.target.checked)}
        className="mr-2"
      />
      <span className="text-sm">済</span>
    </label>
  </div>
</div>

                </div>
            ))}
        </div>
    </div>
  );
};