import React from 'react';
// input field
const RenameForm = ({todos,todo, setTodos, index }) => {
    const [value,setValue] = React.useState("");
  
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        
        

        const newTodos = [...todos];
        newTodos[index].text = value;
        newTodos[index].editing = false;

        console.log(newTodos);
        setTodos(newTodos);

        setValue('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        
        <input  onChange={e => setValue(e.target.value)} 
                className={todo.editing ? "input renameInput" : "displaynone"} 
                type='text' value={value} 
                placeholder={todo.text}/>
      </form>
    );
  };

  export default RenameForm;