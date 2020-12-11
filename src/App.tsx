import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { Todo } from './components/types'
import './App.css'

const initialState: Todo[] = [
  {
    id: 2,
    title: '次のTodo',
    done: false
  }, {
    id: 1,
    title: '最初のTodo',
    done: true
  }
]

const App: React.FC = () => {
  const [todos, settodos] = useState(initialState)

  return (
    <div>
      <TodoInput todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
    </div>
  )
}

export default App
