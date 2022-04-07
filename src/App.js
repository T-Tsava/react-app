import React from 'react';
import './components/stylesheets/todos.css';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js';
import {useState, useEffect} from 'react';
import API from './api/axiosApi';

const App = () => {
  // To do List
  const [todos, setTodos] = useState([]);

  const listTasks = async () => {
    try {
      const alldata = await API.getTasks()
      setTodos(alldata)

    }
    catch(error) {
      console.log("Please, try again later");
      throw error;
    }
  }

  useEffect(() => {
    listTasks();
  }, []);

  // Add Task
  const addTodo = async text => {
    await API.postTask(text)

    listTasks();
  };

  // Complete Task
  const completeTodo = async (id,Tskname,completed) => {
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

    await API.updateTask(id,arr);
    listTasks();
  };

  // Complete All tasks
  const completeAllTodo =  async () => {
    await  API.completeAllTasks();
    listTasks();
  };

  // Remove Task
  const removeTodo = async id => {
    await API.deleteTask(id);
    listTasks();
  };

  // Remove Completed
  const removeCompleted = async () => {
    await API.removeCompletedTasks();
    listTasks();
  };


  // Double click return input
  const renameTodo = async (id,Tskname) => {
    const arr = {
      taskName: Tskname,
      editing: true
    }

    await API.updateTask(id,arr);
    listTasks();
  };

  const updateTodo = async (id,name) => {
    const arr = {
      taskName: name,
      editing: false
    }

    await API.updateTask(id,arr);
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
      }
    });
    if(countOfTasks > 0){
      return <a className='removeAllButton' onClick={() => removeCompleted()}>Clear Completed</a>;
    }else {
      return '';
    };
  };

  // Filter Tasks
  const filterTasksBy = async (FilterStatus) => {
    await API.filterTasks(FilterStatus).then((response) => {
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
