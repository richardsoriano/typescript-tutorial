import React from "react"
import "./styles.css"

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}
const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={(e) => handleAdd(e)}>
      <input
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter values"
      />
      <button type="submit">Go</button>
    </form>
  )
}
// interface Props {
//   todo: string
//   setTodo: React.Dispatch<React.SetStateAction<string>>
//   handleAdd: (e: React.FormEvent) => void
// }
// const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
//   return (
//     <form className="input" onSubmit={(e) => handleAdd(e)}>
//       <input
//         value={todo}
//         onChange={(e) => {
//           setTodo(e.target.value)
//         }}
//         placeholder="Enter a task"
//         className="input__box"
//       />
//       <button className="input_submit" type="submit">
//         Go
//       </button>
//     </form>
//   )
// }

export default InputFeild
