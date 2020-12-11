import React from 'react';
import Todo from './components/Todo'

const App: React.FC = () => {
  const todo = [{ id: 'タスク1', text: '仕事をする' }]
  return (
    <div className="App">
      <Todo items={todo} />
      {/*itemsは、(todo)*/}
    </div>
  );
}

export default App;
