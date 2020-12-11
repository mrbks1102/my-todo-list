import React from 'react'
import Todoitem from './Todoitem'
import { Todo } from './types'

type Props = {
  todos: Todo[]
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, settodos }) => {

  const handleDone = (todo: Todo) => {
    settodos(prev => prev.map(t =>
      t.id === todo.id
        ? { ...todo, done: !todo.done }
        : t
    ))
  }

  const handleDelete = (todo: Todo) => {
    settodos(prev => prev.filter(t =>
      t.id !== todo.id
    ))
  }

  return (
    <div className="inner">
      {
        todos.length <= 0 ? '登録されたTODOはありません。' :
          <ul className="todo-list">
            {todos.map(todo => (
              <Todoitem
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            ))}
          </ul>
      }
    </div>
  )
}

export default TodoList
