import React from 'react';
import {useState} from 'react';
import './stylesheets/renameForm.css';

// Rename
const RenameForm = ({todos,todo, setTodos, index }) => {
    const [renameValue,setRenameValue] = useState(null);

    const newTodos = [...todos];

    const handleSubmit = e => {
        e.preventDefault();
        if (!renameValue) return;

        const woSpaces = renameValue.replace(/\s/g, '');
        if (woSpaces.length) {
          newTodos[index].text = renameValue;
          newTodos[index].editing = false;
          setTodos(newTodos);
        } else {
          return;
        }

        setRenameValue('');
    };

    const cancelEditing = (eventCode, index) => {

      if(eventCode.keyCode === 27){
        newTodos[index].editing = false;
        setTodos(newTodos);
      }
    };

    return (
      <form onSubmit={handleSubmit}>

        <input  onChange={e => setRenameValue(e.target.value)}
                className={todo.editing ? "input renameInput" : "displaynone"}
                type='text' value={renameValue}
                placeholder={todo.text}
                onKeyDown={(e) => cancelEditing(e, index)}
                />
      </form>
    );
  };

  export default RenameForm;