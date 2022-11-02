import React, { useState } from "react"

import { Todo } from "./../model"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./styles.css"
import TodosList from "./TodosList"

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [data, setData] = useState<string>(todo.todo)
  const handleEdit = (id: number) => {
    setIsEdit(!isEdit)
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <form className="todos__single" onSubmit={(e) => handleSubmit(e)}>
      <div>
        {isEdit ? (
          <input value={data} onChange={(e) => setData(e.target.value)} />
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}
        <span className="icon">
          <AiFillEdit onClick={() => handleEdit(todo.id)} />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          {" "}
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
