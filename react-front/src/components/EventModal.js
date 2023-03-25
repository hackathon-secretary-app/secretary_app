import axios from "axios";
import React, { useState, useContext } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";

export const EventModal = () => {
  const { daySelected, setShowEventModal, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [start_date, setStart] = useState(selectedEvent ? selectedEvent.start_date : daySelected.format("YYYY-MM-DD"));
  const [deadline_date, setDeadline] = useState(selectedEvent ? selectedEvent.deadline_date : daySelected.format("YYYY-MM-DD"));
  const [completion_flag, setCompletion] = useState(selectedEvent ? selectedEvent.completion_flag : false);

  const handleSubmit = (e) => {
    // クリック時に送信するというdefaultの動作をキャンセルする
    e.preventDefault();
    const calendarEvent = {
        title: title,
        start_date: start_date,
        deadline_date: deadline_date,
        completion_flag: completion_flag,
        // day: daySelected.valueOf(),
        // id: selectedEvent ? selectedEvent.id : Date.now(),
      };
    // if (selectedEvent) {
    //   dispatchCalEvent({ type: "update", payload: calendarEvent });
    // } else {
    //   dispatchCalEvent({ type: "push", payload: calendarEvent });
    // }

    // ここで通信処理を行う
    console.log(calendarEvent)
    regist_items(calendarEvent)
    
    setShowEventModal(false);
  };
  async function regist_items(todo_items){
    const baseURL = "http://localhost:8000/users/1/todos/1/items"
    axios.post(baseURL,todo_items).then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center text-left">
        <form
            className="bg-white rounded-lg shadow-2xl w-1/4"
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                document.querySelector('button[type="submit"]').click();
            }
            }}
        >

        <header className="bg-gray-100 px-4 py-2 flex justify-end">
          <div className="text-gray-400">
            {selectedEvent && (
              <button
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                <MdDeleteForever />
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <MdClose />
            </button>
          </div>
        </header>
        <div className="p-3">
            <div className="grid grid-cols-1/5 items-end gap-y-7">
                <textarea 
                    name="title" 
                    placeholder="Add task" 
                    value={title} 
                    required 
                    className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 break-words" 
                    style={{ overflowWrap: "break-word", whiteSpace: "normal" }} 
                    onChange={(e) => setTitle(e.target.value)} 
                />

                <div>
                <p>開始日</p>
                <input
                    type="date"
                    name="開始日"
                    value={start_date}
                    className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                    onChange={(e) => setStart(e.target.value)}
                />
                </div>

                <div>
                <p>期限日</p>
                <input
                    type="date"
                    name="期限日"
                    value={deadline_date}
                    className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                    onChange={(e) => setDeadline(e.target.value)}
                />
                </div>

                <div>
                    <p>登録者   {}</p>
                    <p>更新者   {}</p>
                </div>

                

                <p className="flex items-center">
                    <input
                        type="checkbox" 
                        name="completion" 
                        checked={completion_flag}
                        className="mr-2"
                        onChange={(e) => setCompletion(e.target.checked)}
                    />
                    <span className="text-gray-600 text-xl font-semibold">済</span>
                </p>

                

                <p>{daySelected.format("dddd, MMMM DD")}</p>
            </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};