import {React, useState} from 'react'
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import AddTask from '../AddTask';
import './App.css';


function App() {

  const defaultTodos = [
    {id: 1, title: 'Aprender React', completed:false},
    {id: 2, title: 'Aprender React Native', completed:false},
    {id: 3, title: 'Aprender Express', completed:false},
    {id: 4, title: 'Aprender Testing', completed:false},
  ]
  // Definiendo los estados
const [search, setSearch] = useState("")
const [todos, setTodos] = useState(defaultTodos)

// Completar Todos
const totalTodos = todos.length;
const completeTodos =  todos.filter((i) => !i.completed === true).length

// Buscador de listas

const newArray = todos.filter((td) => {
    const searchInput = search.toLowerCase(); // Datos del buscador
    const titleTodos = td.title.toLowerCase() // titulos de mi lista
    return titleTodos.includes(searchInput)
})

// Completando Todos

const endTodo = (id) => {
  const newArray = [...todos];
  const valueSearch = newArray.findIndex(td => td.id === id )
  newArray[valueSearch].completed = true
  setTodos(newArray)
}

// Eliminando Todos

const deleteTodo = (id) => {
  const newArray = [...todos];
  const valueSearch = newArray.findIndex(td => td.id === id )
  newArray.splice(valueSearch,1)
  setTodos(newArray)
}

  return (
    <div className="App">
       <TodoCounter totalT={totalTodos} todosP={completeTodos}/>
       <AddTask />
       <TodoSearch search={search} setSearch={setSearch} />
       <TodoList>
       {newArray.map((td) => (
           <TodoItem 
            key={td.id}
            contexto={td.title}
            complet={td.completed}
            onCompleted={() => endTodo(td.id)}
            onDeleted={() => deleteTodo(td.id)}
          /> 
        ))}
       </TodoList>
       
    </div>
  );
}

export default App;
