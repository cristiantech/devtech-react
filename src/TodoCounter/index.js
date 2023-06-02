import React from 'react'
import './TodoCounter.css'
const TodoCounter = (props) => {
  const {totalT, todosP} = props
//   const styleTodoCounter = {
//     color: 'red',
//     backgroundColor: '#000000'
//   } 
  return (
    <>
    {/* ctrl + k +c  */}
    {/* <h2 style={{ color: '#fff', backgroundColor: '#000000' }}> Tienes 4 tareas pendientes de 4 </h2> */}
    {/* <h2 style={styleTodoCounter}> Tienes 4 tareas pendientes de 4 </h2> */}
    <div  className='TodoCounter'>
        <h2 className="title"> Tienes {todosP}  tareas pendientes de {totalT} </h2>
    </div>
  </>
  )
}

export default TodoCounter