import React from 'react';
import './App.css';

// Task 
const Todo = ({ todo, index, completeTodo}) => {
  return (
    <div id={index} className='todo'
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
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

  return (
    <div className="app">
      <div className='todo-list'>
      <TodoForm addTodo={addTodo} />
      <a className='FilterButtons' onClick={() => completeAllTodo()}>Mark All</a>
         
        {todos.map((todo,index) => (
          <Todo key={index} 
                index={index} 
                todo={todo} 
                completeTodo={completeTodo}
          />
        ))}
        
      </div>
    </div>
  );
};

export default App;
