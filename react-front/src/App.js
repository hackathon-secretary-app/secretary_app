import { useState } from "react";


  function App() {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState(1);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("なし");
    const [deadline, setDeadline] = useState("なし");
    const statusType = ["未着手", "未了", "完了", "保留", "放棄", "三日坊主"];
    const [content, setContent] = useState("");
    const [tableStyle, setTableStyle] = useState(
      "col-10 table table-info table-striped table-responsive table-hover"
    );
  const colorSelection = [
    { text: "テーブルの色を選んでください。", value: "default" },
    { text: "青", value: "blue" },
    { text: "赤", value: "red" },
    { text: "黄色", value: "yellow" },
    { text: "緑", value: "green" },
    { text: "モノトーン", value: "mono" },
    { text: "明るい", value: "bright" },
    { text: "ダーク", value: "dark" }
  ];
  const tableStyleOblect = {
    blue:
      "col-10 table table-primary table-striped table-responsive table-hover",
    red: "col-10 table table-danger table-striped table-responsive table-hover",
    yellow:
      "col-10 table table-warning table-striped table-responsive table-hover",
    green: "col-10 table table-info table-striped table-responsive table-hover",
    mono:
      "col-10 table table-secondary table-striped table-responsive table-hover",
    bright:
      "col-10 table table-light table-striped table-responsive table-hover",
    dark: "col-10 table table-dark table-striped table-responsive table-hover",
    default:
      "col-10 table table-info table-striped table-responsive table-hover"
  };

  const addColorSelection = colorSelection.map((eachColor) => eachColor);

  const colorChange = (e) => {
    setTableStyle(tableStyleOblect[e.target.value])
  };

  const titleChange = (e) => setTitle(e.target.value);

  const addStatusSelection = statusType.map(
    (eachStatusSelection) => eachStatusSelection
  );
  const statusChange = (e) => setStatus(statusType[e.target.value]);

  const deadlineChange = (e) => setDeadline(e.target.value);

  const contentChange = (e) => setContent(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      setTodos([
        ...todos,
        {
          id: id,
          title: title,
          status: status,
          deadline: deadline,
          content: content
        }
      ]);
      setId(id + 1);
    }
    setTitle("");
    setStatus("なし");
    setDeadline("なし");
    setContent("");
  };

  const deleteTodo = (id) => {
    const todos_after_delete = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(todos_after_delete);
  };

  const statusAfterChange = (e, todo) => {
    const new_todos = [...todos];
    const new_status = statusType[e.target.value];
    const target_index = todos.findIndex((eachTodo) => eachTodo === todo);
    new_todos[target_index].status = new_status;
    setTodos(new_todos);
  };

  const deadlineAfterChange = (e, todo) => {
    const new_todos = [...todos];
    const new_deadline = e.target.value;
    const target_index = todos.findIndex((eachTodo) => eachTodo === todo);
    new_todos[target_index].deadline = new_deadline;
    setTodos(new_todos);
  };



  console.log(todos);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
 
        </div>
        <div className="row justify-content-center">
          <label className="col-10 input-group mb-3">
          {/*<span className="col-2 input-group-text">タイトル</span>*/}
            <input
              className="col-8 form-control"
              type="\text"
              name="title"
              value={title}
              placeholder="Todoリスト"
              style={{ width: "200px" }}
              onChange={(e) => titleChange(e)}
              required
            ></input>
          </label>
        </div>
        <div
          className="row justify-content-center"
          styles={{
            marginBottom: "50px"
          }}
        >

        </div>
        <div className="row justify-content-center">
          <label className="col-10 input-group mb-3">
            <span className="col-2 input-group-text">期限</span>
            <input
              className="col-8 form-control"
              type="date"
              name="deadline"
              value={deadline}
              placeholder="締切日を選択してください。"
              style={{ width: "200px" }}
              onChange={(e) => deadlineChange(e)}
              required
            ></input>
          </label>
        </div>
        
        
        <br />
        <div className="row justify-content-center">
          <button onClick={handleFormSubmit} className="col-4 btn btn-primary">
            TODOを登録する
          </button>
        </div>
        <br />
        <br />
        <table
          border="2"
          className={tableStyle}
          styles={{
            marginTop: "50px"
          }}
        >
          <thead className="table-dark">
            <tr>
              <th>id</th>
              <th>タイトル</th>
              <th>期限</th>
              <th colSpan="3">変更</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr>
                <td> {todo.id} </td>
                <td> {todo.title} </td>
                <td> {todo.status} </td>
                <td> {todo.deadline} </td>
                <td
                  styles={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                >
                  {todo.content}
                </td>
                <td>
                  <button onClick={() => deleteTodo(todo.id)}>削除</button>
                </td>
                <td>
                  <select onChange={(e) => statusAfterChange(e, todo)}>
                    <option value="">進捗の変更</option>
                    {addStatusSelection.map((status, key) => (
                      <option value={key}>{status}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    value="期限変更"
                    onChange={(e) => deadlineAfterChange(e, todo)}
                  ></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <label className="col-10 input-group mb-3">
            <span className="col-2 input-group-text">テーブルの色変更</span>
            <select
              className="col-8 form-control"
              name="status"
              style={{ width: "200px" }}
              onChange={(e) => colorChange(e)}
              required
            >
              {addColorSelection.map(({ text, value }) => (
                <option value={value} key={value}>{text}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;