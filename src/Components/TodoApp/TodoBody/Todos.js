import React from 'react'
import style from "./Todos.module.css"

import Todo from './Todo'

export default function Todos(props) {
  const removeIdHendel = (id) =>{
    return props.todoRemove(id)
  }
  return (
    <div className={style.todosWrap}>

   {
    props.Todos.map(todo => <Todo 
      id={todo.id}
      todo={todo.nTodo.todo}
      disc={todo.nTodo.disc}
      key={todo.id}
      todoRemove={removeIdHendel}
      />)
     
   }
  
    </div>  
  )
}
