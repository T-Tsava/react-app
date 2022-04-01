import React from 'react';
import './App.css';

// Task 
const Todo = ({ todo, index, completeTodo, removeTodo}) => {
  return (
    <div id={index} className='todo'
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
};
// input field
const TodoForm = ({ addTodo }) => {
  const [value,setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input  type="text" 
              className='input' 
              value={value} 
              onChange={e => setValue(e.target.value)}/>
    </form>
  );
};

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
  }

  // Complete All tasks
  const completeAllTodo = () => {
    const newTodos = [...todos];
    newTodos.forEach((element, index) => {
      
      if (element.isCompleted == true){
        element.isCompleted = false;
        
      }else {
        element.isCompleted = true;
      }  
    });
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
    }
  }

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

  // Show All tasks
  const showAll = index => {
    todos.forEach((element, index) => {
      let elementToHide = document.getElementById(index)
      elementToHide.classList.remove("displaynone");
    })
  }

  // Show Active
  const showActive = index => {
    todos.forEach((element, index) => {
      let elementToHide = document.getElementById(index)
      elementToHide.classList.remove("displaynone");

      if(element.isCompleted == true){
        elementToHide.classList.add("displaynone");
      }
    })
  }

  // Show Completed
  const showCompleted = index => {
    todos.forEach((element, index) => {
      let elementToHide = document.getElementById(index)
      elementToHide.classList.remove("displaynone");

      if(element.isCompleted != true){
        elementToHide.classList.add("displaynone");
      }
    })
  }

  return (
    <div className="app">
      <div className='todo-list'>
      <TodoForm addTodo={addTodo} />
      <a className='FilterButtons' onClick={() => completeAllTodo()}>Mark All</a>
      <a className='FilterButtons' onClick={() => removeCompleted()}>Remove All</a>   
        {todos.map((todo,index) => (
          <Todo key={index} 
                index={index} 
                todo={todo} 
                completeTodo={completeTodo}
                removeTodo={removeTodo}
          />
        ))}
        
      </div>
      <a><CountDos /></a>
      <a className='FilterButtons' onClick={() => showAll()}>All</a>
      <a className='FilterButtons' onClick={() => showActive()}>Active</a>
      <a className='FilterButtons' onClick={() => showCompleted()}>Completed</a>
    </div>
  );
};

export default App;
