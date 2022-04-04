import React from 'react';
// input field
const TodoForm = ({ addTodo }) => {
    const [value,setValue] = React.useState(""); //destructure states: pls use it above like this: import {useState, useEffect} from 'react';
  // please rename state names above.
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input  type="text" 
                className='input addInput' 
                value={value} 
                onChange={e => setValue(e.target.value)}
                placeholder='What needs to be done?'/>
      </form>
    );
  };

  export default TodoForm;