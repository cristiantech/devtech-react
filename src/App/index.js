
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import CreateButton from '../CreateButton';
import './App.css';

function App() {
  return (
    <div className="App">
       <TodoCounter />
       <TodoSearch />
       <TodoList>
        <TodoItem/>
       </TodoList>
       <CreateButton/>
    </div>
  );
}

export default App;
