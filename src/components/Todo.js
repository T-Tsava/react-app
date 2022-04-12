import React from 'react';
import RenameForm from '../components/RenameForm.js';
import './stylesheets/todo.css';
// Task
const Todo = ({todo, completeTodo, removeTodo, renameTodo, updateTodo, index }) => {

    const filterTasks = () => {
      const showComp = todo.completed ? "todo completed" : "todo";

      return showComp;
    };

    return (
      <div id={todo._id}
      className={filterTasks()}
      >
        <input type="checkbox" className='check_task' onClick={() => completeTodo(todo._id,todo.taskName,todo.completed)}/>
        <a  onDoubleClick={() => renameTodo(index)}>{todo.taskName}</a>
        <RenameForm todo={todo} updateTodo={updateTodo} />
        <button className='delete_button' onClick={() => removeTodo(todo._id)}>X</button>
      </div>
    );
  };

  export default Todo;