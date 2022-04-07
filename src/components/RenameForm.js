import React from 'react';
import {useState} from 'react';
import './stylesheets/renameForm.css';

// Rename
const RenameForm = ({todo, updateTodo }) => {
    const [renameValue,setRenameValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!renameValue) return;

        const woSpaces = renameValue.replace(/\s/g, '');
        if (woSpaces.length) {
          updateTodo(todo._id,woSpaces);
        } else {
          return;
        }

        setRenameValue('');
    };

    const cancelEditing = (eventCode, id, taskName) => {
      if(eventCode.keyCode === 27){
        updateTodo(id,taskName);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input  onChange={e => setRenameValue(e.target.value)}
                className={todo.editing ? "input renameInput" : "displaynone"}
                type='text' value={renameValue}
                placeholder={todo.taskName}
                onKeyDown={(e) => cancelEditing(e, todo._id,todo.taskName)}
                />
      </form>
    );
  };

  export default RenameForm;