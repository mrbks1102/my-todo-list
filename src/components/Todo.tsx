import React from 'react';

// interfaceは新しい型を定義するために使う
interface TodoProps {
  items: { id: string, text: string }[]
};

const Todo: React.FC<TodoProps> = props => {
  return (
    <ul>
      {props.items.map(list => (
        <li key={list.id}>{list.text}</li>
      ))}
    </ul>
  )
}


export default Todo;
