import React, { useState } from 'react'

export default function NewTodo(props) {
    const [newTodo, setNewTodo] = useState("");

    const inputHendel = (e) =>{
        setNewTodo(e.target.value);
       

    }

    const submitHendel = (e) =>{
        e.preventDefault();
        props.onTodo(newTodo);
        setNewTodo("")
        
    }

  return (
    <div>
      <form action="" onSubmit={submitHendel} >
        <input type="text" value={newTodo} onChange={inputHendel} />
        <button>submit</button>
      </form>
    </div>
  )
}
