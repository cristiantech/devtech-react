import React from 'react'
import './TodoSearch.css'
const TodoSearch = ({search, setSearch}) => {
  console.log(search)
  return (
    <>
    <div className='search'>
        <input 
        type="text" 
        value={search}
        placeholder="busque una tarea"
        onChange={ (ev) => {
          setSearch(ev.target.value)
        }
        }
        />
    </div>
    </>
  )
}

export default TodoSearch