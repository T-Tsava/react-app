import React from 'react';
import './components/stylesheets/todos.css';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js';
import {useState, useEffect} from 'react';
import API from './api/axiosApi';

const App = () => {
  // To do List
  const [todos, setTodos] = useState([]);

  // List Tasks
  const listTasks = () => {
    API.getTasks().then((response) => {
      const alldata = response
      setTodos(alldata)
    })
    .catch(error => console.error('error'));
  }

  useEffect(() => {
    listTasks();
  }, []);

  // Add Task
  const addTodo = text => {
    API.postTask(text)

    listTasks();
  };

  // Complete Task
  const completeTodo = (id,Tskname,completed) => {
    let comValue = undefined;
    if(completed == true){
      comValue = false
    }else {
      comValue = true
    }
    const arr = {
      taskName: Tskname,
      completed: comValue
    }

    API.updateTask(id,arr);

    listTasks();
  };

  // Complete All tasks
  const completeAllTodo = () => {
    API.completeAllTasks();

    listTasks();
  };

  // Remove Task
  const removeTodo = id => {
    API.deleteTask(id);

    listTasks();
  };

  // Remove Completed
  const removeCompleted = () => {
    API.removeCompletedTasks();
    listTasks();
  };


  // Double click return input
  const renameTodo = (id,Tskname) => {
    const arr = {
      taskName: Tskname,
      editing: true
    }

    API.updateTask(id,arr);
    listTasks();

  };

  const updateTodo = (id,name) => {
    const arr = {
      taskName: name,
      editing: false
    }

    API.updateTask(id,arr);
    listTasks();
  }

  // Task Count
  const CountDos = () => {
    let countOfTasks = 0;
    todos.forEach(element => {
      if (element.completed == true){
      }else {
        countOfTasks++;
      }
    });
    return countOfTasks;
  };

  // Counts Completed
  const CountCompleted = () => {
    let countOfTasks = 0;
    todos.forEach(element => {
      if (element.completed == true){
        countOfTasks++;
      }else {

      }
    });
    if(countOfTasks > 0){
      return <a className='removeAllButton' onClick={() => removeCompleted()}>Clear Completed</a>;
    }else {
      return '';
    };
  };

  // Filter Tasks
  const filterTasksBy = (FilterStatus) => {
    API.filterTasks(FilterStatus).then((response) => {
      const alldata = response
      setTodos(alldata)
    })
    .catch(error => console.error('error'));
  };


  return (
    <div className="app">
      <h1 className='title'>todos</h1>
      <div className='tasksContainer'>
        <div className='todos'>
          <div className='todo-list'>
          <a className='MarkAllButton' onClick={() => completeAllTodo()}></a>
          <TodoForm addTodo={addTodo} />

            {todos.map((todo) => (

              <Todo key={todo._id}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    renameTodo={renameTodo}
                    todos={todos}
                    updateTodo={updateTodo}
              />
            ))}
          </div>
          <a className='CountTasks'><CountDos /> items left</a>
          <div className='FilterButtons'>
            <a className='' onClick={() => filterTasksBy('all')}>All</a>
            <a className='' onClick={() => filterTasksBy('active')}>Active</a>
            <a className='' onClick={() => filterTasksBy('completed')}>Completed</a>
          </div>
          <CountCompleted />
          <div className='clear'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
