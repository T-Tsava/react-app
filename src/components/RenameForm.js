import React from 'react';
// Rename
const RenameForm = ({todos,todo, setTodos, index }) => {
    const [value,setValue] = React.useState(""); //destructure states: pls use it above like this: import {useState, useEffect} from 'react';
	// please rename state names above.
    const newTodos = [...todos];

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        let woSpaces = value.replace(/\s/g, ''); //if the variable doesn't change it's initial value, please declare it with 'const'
        if (woSpaces.length > 0) { // there's no need to set > 0 for this value. Can you explain why is that?
          newTodos[index].text = value;
          newTodos[index].editing = false;
          setTodos(newTodos);
        } else {
          return;
        };

        setValue('');
    };

    const cancelEditing = (eventCode, index) => {
     
      if(eventCode.keyCode === 27){
        newTodos[index].editing = false;
        setTodos(newTodos);
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        
        <input  onChange={e => setValue(e.target.value)} 
                className={todo.editing ? "input renameInput" : "displaynone"} 
                type='text' value={value} 
                placeholder={todo.text}
                onKeyDown={(e) => cancelEditing(e, index)}
                />
      </form>
    );
  };

  export default RenameForm;