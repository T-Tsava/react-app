import React from 'react';
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
                className='input addInput' 
                value={value} 
                onChange={e => setValue(e.target.value)}
                placeholder='What needs to be done?'/>
      </form>
    );
  };

  export default TodoForm;