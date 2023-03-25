import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export const Day = (props) => {
  const { day, rowIdx } = props;
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  // 今日の日付を色付けする
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  // 登録データを日付が一致する日に表示
  useEffect(() => {
    const events = savedEvents.filter(
      evt => {
        const evtDay = dayjs(evt.day).format("DD-MM-YY");
        const evtStartDate = dayjs(evt.start_date).format("DD-MM-YY");
        const evtDeadlineDate = dayjs(evt.deadline_date).format("DD-MM-YY");
        const dayFormatted = day.format("DD-MM-YY");
        return evtDay === dayFormatted || evtStartDate === dayFormatted || evtDeadlineDate === dayFormatted;
      }
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  return (
    <div className="border-2 border-gray-300 flex flex-col">
        <div className={`flex flex-col items-center ${day.day() === 6 ? 'bg-blue-300' : day.day() === 0 ? 'bg-red-300' : 'bg-gray-300'}`}>
            {/* 1行目に曜日を表示 */}
            {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        </div>

        <div className="flex flex-col items-center">
            <p className={`text-sm p-1 my-1 text-center" ${getCurrentDayClass()}`}>
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
                    className={`bg-neutral-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                >
                    <div className="flex justify-between">
                        <div className="w-5/6">
                            <p className="line-clamp-2 h-16 pt-1 pb-1 border-0 text-gray-600 text-xl font-semibold overflow-hidden whitespace-normal break-all border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 text-left">
                                {evt.title}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="completion"
                                checked={evt.completion_flag}
                                required
                                onChange={(e) => evt.setCompletion(e.target.checked)}
                            />
                            <span>済</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};