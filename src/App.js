import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';


const App = () => {
  // To do List 
  const [todos, setTodos] = React.useState([
    
  ]);
  // Add Task
  const addTodo = text => {
    const newTodos = [...todos,{ text }];
    setTodos(newTodos);
  };

  // Complete Task
  const completeTodo = index => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted == true){
      newTodos[index].isCompleted = false;
    }else {
      newTodos[index].isCompleted = true;
    }  
    setTodos(newTodos);
  };

  // Complete All tasks
  const completeAllTodo = () => {
    const newTodos = [...todos];
    
    let checkTodos = newTodos.filter(function (e) {
      return e.isCompleted > 0;
    });

    if(checkTodos.length != newTodos.length){
      newTodos.forEach((element, index) => {
        element.isCompleted = true;
      });
    }else {
      newTodos.forEach((element, index) => {
        element.isCompleted = false;
      });
    } 
    setTodos(newTodos);
  };

  // Remove Task
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  // Remove Completed
  const removeCompleted = () => {
    const newTodos = [...todos];
    for (let i = newTodos.length -1; i >= 0; i -= 1){
      if(newTodos[i].isCompleted == true){
        newTodos.splice(i,1);
      }
      setTodos(newTodos);
    };
  };

  // Rename
   const rnmTodo = (index,value) => {
    const newTodos = [...todos];
    newTodos[index].text = value;
    setTodos(newTodos);
  }
  // Double click return input
  const renameTodo = (index) => {
    const newTodos = [...todos];
    //newTodos[index].text = '';
    
    //setTodos(newTodos);
    let replace = document.getElementById(index)
    replace.innerHTML = `<form onsubmit=""'><input class='input renameInput' type='text' value="${newTodos[index].text}"/></form>`

    
  };

  // Task Count
  const CountDos = () => {
    let countOfTasks = 0
    todos.forEach(element => {
      
      if (element.isCompleted == true){
        
      }else {
        countOfTasks++
      }  
    });
    return countOfTasks;
  };

  const [allTaskStatus, setAllTaskStatus] = React.useState();

  // Show All tasks
  const showAll = () => {
    const newTodos = [...todos];

    newTodos.forEach((element, index) => {
      element.toHide = false;
    });
    setTodos(newTodos);
  };

  // Show Active
  const showActive = () => {
    const newTodos = [...todos];

    newTodos.forEach((element, index) => {
      if(element.isCompleted != true){
        element.toHide = false;
      }else {
        element.toHide = true;
      }
    });
    setTodos(newTodos);
  };

  // Show Completed
  const showCompleted = () => {
    const newTodos = [...todos];

    newTodos.forEach((element, index) => {
      if(element.isCompleted == true){
        element.toHide = false;
      }else {
        element.toHide = true;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 className='title'>todos</h1>
      <div className='todos'>
        <div className='todo-list'>
        <a className='MarkAllButton' onClick={() => completeAllTodo()}></a>
        <TodoForm addTodo={addTodo} />
          
          {todos.map((todo,index) => (
            <Todo key={index} 
                  index={index} 
                  todo={todo} 
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  renameTodo={renameTodo}
            />
          ))}
          
        </div>
        <a className='CountTasks'><CountDos /> items left</a>
        <div className='FilterButtons'>
          <a className='' onClick={() => showAll()}>All</a>
          <a className='' onClick={() => showActive()}>Active</a>
          <a className='' onClick={() => showCompleted()}>Completed</a>
        </div>
        <a className='removeAllButton' onClick={() => removeCompleted()}>Clear Completed</a>
        <div className='clear'></div>
      </div>
    </div>
  );
};

export default App;
