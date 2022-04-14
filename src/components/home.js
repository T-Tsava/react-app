import React from 'react';
import './stylesheets/todos.css';
import Todo from './Todo.js';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm.js';
import {useState, useEffect} from 'react';
import API from '../api/axiosApi';

const Home = () => {
    // To do List
  const [todos, setTodos] = useState([]);
  const currentUser = useSelector(state => state.userInfo)
  let userid = undefined;
  if(currentUser[0]) {
    userid = currentUser[0].id;
  }

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
    await API.postTask(text,userid);

    listTasks();
  };

  // Complete Task
  const completeTodo = async (id,Tskname,completed) => {
    let comValue = !completed;
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
  const removeTodo = async (id) => {
    await API.deleteTask(id,userid);
    listTasks();
  };

  // Remove Completed
  const removeCompleted = async () => {
    await API.removeCompletedTasks(userid);
    listTasks();
  };


  // Double click return input
  const renameTodo = async (index) => {
    const newTodos = [...todos]
    newTodos[index].editing = true;
    setTodos(newTodos);
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
      if (element.completed === true){
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
      if (element.completed === true){
        countOfTasks++;
      }
    });
    if(countOfTasks > 0){
      return <button className='removeAllButton' onClick={() => removeCompleted()}>Clear Completed</button>;
    }else {
      return '';
    };
  };

  // Filter Tasks
  const [filters, setFilters] = useState({ all: true,active: false ,completed: false});

  const filterTasksBy = async (FilterStatus) => {
    await API.filterTasks(FilterStatus).then((response) => {
      const alldata = response
      setTodos(alldata)
    })
    .catch(error => console.error('error'));

    if(FilterStatus === 'all'){
      let filterChange = [filters]
      filterChange = { all: true,active: false ,completed: false}
      setFilters(filterChange);
    }else if(FilterStatus === 'active'){
      let filterChange = [filters]
      filterChange = { all: false,active: true ,completed: false}
      setFilters(filterChange);
    }else {
      let filterChange = [filters]
      filterChange = { all: false,active: false ,completed: true}
      setFilters(filterChange);
    }
  };

    return (
    <div className='container'>
        <h1 className='title'>todos</h1>
        <div className='tasksContainer'>
          <div className='todos'>
            <div className='todo-list'>
            <button className='MarkAllButton' onClick={() => completeAllTodo()}></button>
            <TodoForm addTodo={addTodo} />

              {todos.map((todo, index) => (

                <Todo key={todo._id}
                      todo={todo}
                      completeTodo={completeTodo}
                      removeTodo={removeTodo}
                      renameTodo={renameTodo}
                      todos={todos}
                      updateTodo={updateTodo}
                      index={index}
                />
              ))}
            </div>
            <span className='CountTasks'><CountDos /> items left</span>
            <div className='FilterButtons'>
              <button className={filters.all ? "activeFilter" : ""} onClick={() => filterTasksBy('all')}>All</button>
              <button className={filters.active ? "activeFilter" : ""} onClick={() => filterTasksBy('active')}>Active</button>
              <button className={filters.completed ? "activeFilter" : ""} onClick={() => filterTasksBy('completed')}>Completed</button>
            </div>
            <CountCompleted />
            <div className='clear'></div>
          </div>
        </div>
    </div>
    );
  }
  export default Home;