import React from 'react';
// Task 
const Todo = ({ todo, index, completeTodo, removeTodo, renameTodo}) => {

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
        <button className='delete_button' onClick={() => removeTodo(index)}>X</button>
        
      </div>
    );
  };

  export default Todo;