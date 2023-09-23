import React from 'react'

import style from "./Todo.module.css"

import {FaTrash} from 'react-icons/fa';



export default function Todo(props) {
   const {todo,disc,id} = props;
   
   const todoRemoveID = () =>{
    return props.todoRemove(id)
  }
  return (
    <div className={style.todoWrap}>
      <div className="todo">
        <h3>{todo}</h3>
        <p><small>{disc}</small></p>
      </div>
      <div className="">
      <FaTrash onClick={todoRemoveID} className={style.btn}/>
      </div>
    </div>
  )
}
