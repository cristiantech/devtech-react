import React from 'react'
import './AddTask.css'
const AddTask = () => {
  return (
    <>
      <div className='form'>
        <p>Registro de Tareas</p>
        <div className='AddTask'>
          <input type='text' placeholder='Ingrese una nueva tarea'/>
          <button type='submit'>Agregar</button>
        </div>
      </div>
    </>
  )
}

export default AddTask