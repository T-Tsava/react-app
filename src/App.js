import React from 'react';
import './App.css';

// Task 
const Todo = ({ todo, index}) => {
  return (
    <div id={index} className='todo'>
      {todo.text}
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

  return (
    <div className="app">
      <div className='todo-list'>
      <TodoForm addTodo={addTodo} />
        {todos.map((todo,index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        
      </div>
    </div>
  );
}

export default App;
