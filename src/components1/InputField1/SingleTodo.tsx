import React, { useEffect, useRef, useState } from "react"
import { Todo } from "./../../model"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./styles.css"
import TodoList from "./Todos"

type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  var [isEdit, setIsEdit] = useState<boolean>(false)
  var [editTodo, setEditTodo] = useState<string>(todo.todo)
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setIsEdit(false)
  }
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => (todo.id !== id ? todo : null)))
  }
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEdit])

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {isEdit ? (
        <input
          // ref={inputRef}
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value)
          }}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text"> {todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        done?:{todo.isDone}
        <span
          className="icon"
          onClick={() => {
            if (!isEdit && !todo.isDone) {
              setIsEdit(!isEdit)
            }
          }}
        >
          <AiFillEdit onClick={() => setIsEdit(true)} />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}
export default SingleTodo
// import React from "react"
// import { Todo } from "../../model"
// import { AiFillEdit, AiFillDelete } from "react-icons/ai"
// import { MdDone } from "react-icons/md"
// import "./styles.css"

// type Props = {
//   todo: Todo
//   todos: Todo[]
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
// }

// const SingleTodo = ({ todo, todos, setTodos }: Props) => {
//   return (
//     <form className="todos__single">
//       <span className="todos__single--text">{todo.todo}</span>
//       <div>
//         <span className="icon">
//           <AiFillEdit />
//         </span>
//         <span className="icon">
//           <AiFillDelete />
//         </span>
//         <span className="icon">
//           <MdDone />
//         </span>
//       </div>
//     </form>
//   )
// }
// export default SingleTodo

// AiFillEdit
