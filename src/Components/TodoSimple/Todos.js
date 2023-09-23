import React, { useState } from 'react'
import Todo from './Todo.js'

export default function Todos(props) {
    const {todos}= props
  return (
    <div>
    {
        todos.map((todo,id) => <Todo key={id} todo={todo}/> )
    }
    </div>
  )
}
