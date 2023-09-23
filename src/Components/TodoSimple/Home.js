import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

const dumyTodos = ["todo1","todo2","todo3"];

export default function Home() {
    const [todos, setTodo] = useState(dumyTodos);
    const newTodoHendel = (newTodo) =>{
        setTodo([...todos,newTodo])
    }
  return (
    <div>
      <NewTodo onTodo={newTodoHendel} />
      <Todos todos={todos}/>
    </div>
  )
}
