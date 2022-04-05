import React from 'react';
import {useState} from 'react';
import './stylesheets/todoForm.css';
// input field
const TodoForm = ({ addTodo }) => {
    const [taskValue,setTaskValue] = useState(null);

    const handleSubmit = e => {
      e.preventDefault();
      if (!taskValue) return;
      addTodo(taskValue);
      setTaskValue('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input  type="text"
                className='input addInput'
                value={taskValue}
                onChange={e => setTaskValue(e.target.value)}
                placeholder='What needs to be done?'/>
      </form>
    );
  };

  export default TodoForm;