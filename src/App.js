import React from 'react';
import './App.css';

// Task 
const Todo = ({ todo, index, completeTodo, removeTodo, renameTodo}) => {
  return (
    <div id={index}
    className={todo.isCompleted ? "todo completed" : "todo"}
    >
      <input type="checkbox" className='check_task' onClick={() => completeTodo(index)}/>
      <a onDoubleClick={() => renameTodo(index)}>{todo.text}</a>
      <button className='delete_button' onClick={() => removeTodo(index)}>X</button>
      
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
              onChange={e => setValue(e.target.value)}
              placeholder='What needs to be done?'/>
    </form>
  )
}


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
    replace.innerHTML = `<form onsubmit="${rnmTodo(index)}"'><input type='text' value="${newTodos[index].text}"/></form>`

    
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

  // Show All tasks
  const showAll = () => {
    todos.forEach((index) => {
      let elementToHide = document.getElementById(index)
      elementToHide.classList.remove("displaynone");
    })
  }

  // Show Active
  const showActive = () => {
    todos.forEach((element, index) => {
      let elementToHide = document.getElementById(index)
      elementToHide.classList.remove("displaynone");

      if(element.isCompleted == true){
        elementToHide.classList.add("displaynone");
      }
    })
  }

  // Show Completed
  const showCompleted = () => {
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
}

export default App;
