import React , { useState } from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TodoInput from './TodoInput';
import Todo from './Todo';


function App() {
  const [todos , setTodos] = useState([]);

  // Add Todo
  function addTodo(value){
      const newTodo = [...todos , {text : value , isComplete:false}];
      setTodos(newTodo);
  }

  // Remove Todo

  function removeTodo(index){
    let newTodos = [...todos];
    newTodos.splice(index , 1);
    setTodos(newTodos)
  }

  function toComplete(index){
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos)
  }
 return(
   <div className="container p-3 mx-auto card">
     <div className="card-header text-center text-danger"><h1>Todo List</h1><span className="float-right h6 text-danger"><a href="http://sadeghakbari.gigfa.com">About Me</a></span></div>
        <div className="card-body">
          <ul className="list-group">
              {
                todos.map( (todo , index) => {
                  return(
                  <Todo tocomplete={toComplete} index={index} key={index} removetodo={removeTodo} todo={todo} />
                )})
              }
          </ul>
                <TodoInput addtodo={addTodo}/>
      </div>
    </div>
 )
}

export default App;

 