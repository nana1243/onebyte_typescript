import './App.css'
import {useState} from "react";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [todos , setTodos] = useState<Todo[]>([]);

  const handleOnClick = () => {
    setTodos((prevTodos) => [...prevTodos, { id: prevTodos.length + 1, text } ])

  }

  return (
    <>
      <div>
        <h1>Todo</h1>
        <Editor handleOnClick={handleOnClick}/>
        <div>Children</div>
      </div>
    </>
  )
}

export default App
