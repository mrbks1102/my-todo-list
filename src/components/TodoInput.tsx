import React, { useState } from 'react'
import { Todo } from '../Types'

type Props = {
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>
  todos: Todo[]
}

const TodoInput: React.FC<Props> = ({ settodos, todos }) => {
  const [inputTitle, setInputTitle] = useState<string>('')
  const [count, setCount] = useState<number>(todos.length + 1)


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
    setCount(count + 1)

    const newtodo: Todo = {
      id: count,
      title: inputTitle,
      done: false
    }

    settodos([newtodo, ...todos])
    setInputTitle('')

  }

  return (
    <div>
      <div className="inputForm">
        <div className="inner">
          <input
            type="text"
            className="input"
            value={inputTitle}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} className="btn is-primary">追加</button>
        </div>
      </div>
    </div>
  )
}

export default TodoInput
