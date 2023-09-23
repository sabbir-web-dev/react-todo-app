import React, { useState } from "react";

import style from "./TdoHeader.module.css";

export default function TodoHeader(props) {

  const [allTodo, setTodo] = useState({ todo: "", disc: "" });
  const { todo, disc } = allTodo;


  const inputHendel = (e) => {
    const name = e.target.name;
    console.log()


    setTodo((oldTodo) => {
      return {
        ...oldTodo,[name]:e.target.value
      }
    })
  };
  

  const submitHendel = (e) =>{
    e.preventDefault();
    if(allTodo.todo === ""){
      
    }else{
      props.todo(allTodo)
    }
    setTodo({todo:"",disc:""})
  }
  return (
    <div className={style.homeWrap}>
      <h2>Todo App</h2>

      <form onSubmit={submitHendel}>
        <div className={style.inputWrap}>
          <label htmlFor="todo">Your Todo:</label>
          <input
            onChange={inputHendel}
            type="text"
            value={todo}
            name="todo"
            className={style.input}
          />
        </div>
        <div className={style.inputWrap}>
          <label htmlFor="disc">Discription:</label>
          <textarea
            onChange={inputHendel}
            name="disc"
            value={disc}
            type="text"
            className={style.input}
          ></textarea>
        </div>
        <div className="">
          <button type="submit"
           className={style.submitBtn}
           >
            add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
