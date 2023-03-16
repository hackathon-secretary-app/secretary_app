import { useState } from "react";


function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const titleHandle = (e) => setTitle(e.target.value);

  const dateHandle = (e) => setDate(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && date !=="") {
      setTodos([
        ...todos,
        {
          id: id,
          title: title,
          date: date,
        }
      ]);
      setId(id + 1);
    }
    else {
      alert("項目未入力")
    }
  };

  const deleteTodo = (id) => {
    const todos_after_delete = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(todos_after_delete);
  };

  console.log(todos);

  return (
    <>
      <div>
        <input
          type="\text"
          name="title"
          value={title}
          placeholder="Todoリスト"
          onChange={(e) => titleHandle(e)}
          required
        >
        </input>
      </div>

      <div>
        <span>予定日</span>
        <input
          type="datetime-local"
          name="date"
          value={date}
          onChange={(e) => dateHandle(e)}
          required
        >
        </input>
      </div>
        
      <div>
        <button onClick={handleFormSubmit}>
          TODOを登録する
        </button>
      </div>

        <table
          border="2"
        >
        <thead>
          <tr>
            <th>タイトル</th>
            <th>予定日</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr>
              <td> {todo.title} </td>
              <td> {todo.date} </td>
              <td>
              <button onClick={() => deleteTodo(todo.id)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </>
  );
}

export default App;