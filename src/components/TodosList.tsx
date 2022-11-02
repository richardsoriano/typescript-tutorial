import React from "react"

import SingleTodo from "./SingleTodo"
import { Todo } from "./../model"
interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodosList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>
      <span>Todos List</span>
      {todos.map((todo) => (
        <div>
          <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  )
}

export default TodosList
