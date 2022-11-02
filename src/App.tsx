import React, { useState } from "react"
import "./App.css"
import InputFeild from "./components/InputFeild"
import "./components/TodosList"

import { Todo } from "./model"
import TodosList from "./components/TodosList"
const App: React.FC = () => {
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("todo", todo)
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
    }
  }

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
