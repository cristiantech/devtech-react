import React from 'react'
import './TodoItem.css'
const TodoItem = (props) => {
  return (
    <>
    <li>
        <span 
        className={props.complet ? "active-completed" : "notcompleted"}
        onClick={props.onCompleted}
          >7</span>
        <p> {props.contexto} </p>
        <span
        onClick={props.onDeleted}
        >X</span>
    </li>
    </>
  )
}

export default TodoItem