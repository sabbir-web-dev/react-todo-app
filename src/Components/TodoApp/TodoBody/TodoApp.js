import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import TodoHeader from '../TodoHeader/TodoHeader'
import Todos from './Todos';


export default function TodoApp() {
  const [newTodo,setNewTodo] = useState([]);

  const newTodoHendle = (nTodo) =>{
    setNewTodo((prevTodo) =>{
      return [...prevTodo,{id: uuidv4(),nTodo}]
    });
  }

  const todoRemoveHendel = (id) =>{
    setNewTodo((prveTodo) =>{
      const filterTodo = prveTodo.filter((todo) => todo.id !== id );
      return filterTodo;
    })
  }
  return (
    <div >
      <TodoHeader todo={newTodoHendle}/>
      <Todos  Todos={newTodo} todoRemove={todoRemoveHendel} />
    </div>
  )
}
