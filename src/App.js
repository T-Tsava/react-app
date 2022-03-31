import React from 'react';
import './App.css';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js';

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
      newTodos.forEach((element) => {
        element.isCompleted = true;
      });
    }else {
      newTodos.forEach((element) => {
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

  
  // Double click return input
  const renameTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].editing = true;
    setTodos(newTodos);
  };

  // Task Count
  const CountDos = () => {
    let countOfTasks = 0;
    todos.forEach(element => {
      if (element.isCompleted == true){
      }else {
        countOfTasks++
      };  
    });
    return countOfTasks;
  };

  // Counts Completed
  const CountCompleted = () => {
    let countOfTasks = 0;
    todos.forEach(element => {
      if (element.isCompleted == true){
        countOfTasks++;
      }else {
        
      };  
    });
    if(countOfTasks > 0){
      return <a className='removeAllButton' onClick={() => removeCompleted()}>Clear Completed</a>;
    }else {
      return '';
    };
  };

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
      };
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
      };
    });
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1 className='title'>todos</h1>
      <div className='tasksContainer'>
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
                    todos={todos}
                    setTodos={setTodos}
                    
              />
            ))}
            
          </div>
          <a className='CountTasks'><CountDos /> items left</a>
          <div className='FilterButtons'>
            <a className='' onClick={() => showAll()}>All</a>
            <a className='' onClick={() => showActive()}>Active</a>
            <a className='' onClick={() => showCompleted()}>Completed</a>
          </div>
          <CountCompleted />
          <div className='clear'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
