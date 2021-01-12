import {useState, useEffect} from "react";

import ToDoList from "../components/ToDoList";
import NewItem from "../components/NewItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data.splice(0,20)));
  }, [])

  return (
    <div className="App">
      <NewItem setTodos={setTodos}/>
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;