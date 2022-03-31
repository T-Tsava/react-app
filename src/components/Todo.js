import React from 'react';
import RenameForm from '../components/RenameForm.js';
// Task 
const Todo = ({todos, todo, index, completeTodo, removeTodo, renameTodo, setTodos }) => {

    const filterTasks = () => {
      let showComp = todo.isCompleted ? "todo completed" : "todo";
      let showFilters = todo.toHide ? " displaynone" : "";

      return showComp + showFilters;
    };

    return (
      <div id={index}
      className={filterTasks()}
      
      >
        <input type="checkbox" className='check_task' onClick={() => completeTodo(index)}/>
        <a  onDoubleClick={() => renameTodo(index)}>{todo.text}</a>
        <RenameForm todos={todos} todo={todo} index={index}  setTodos={setTodos}/>
        <button className='delete_button' onClick={() => removeTodo(index)}>X</button>
        
      </div>
    );
  };

  export default Todo;