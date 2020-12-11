import React from 'react'
import { Todo } from '../Types'

type Props = {
  todo: Todo
  handleDone: (todo: Todo) => void
  handleDelete: (todo: Todo) => void
}

const Todoitem: React.FC<Props> = ({ todo, handleDone, handleDelete }) => {

  return (
    <li className={todo.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(todo)}
          defaultChecked={todo.done}
        />
        <span className="checkbox-label">{todo.title}</span>
      </label>
      <button
        onClick={() => handleDelete(todo)}
        className="btn is-delete"
      >削除</button>
    </li>
  )
}

export default Todoitem
