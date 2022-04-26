import axios from 'axios';
import Login from '../components/login';

const APIURLLOCAL = 'https://node-todo-api-heroku-websmart.herokuapp.com/api/tasks/';
const APIURL = 'http://localhost:3005/api/tasks/';
const APIURLusers = 'http://localhost:3005/api/users/';

const API = {
    // Tasks
    getTasks: async () => {
        const {data: toDoList} = await axios.get(APIURL);
        return toDoList;
    },
    postTask: async (addTodo) => {
        await axios.post(APIURL, {taskName : addTodo});
    },
    deleteTask: async (taskId) => {
        await axios.delete(APIURL + taskId);
    },
    completeAllTasks: async () => {
        await axios.patch(APIURL);
    },
    removeCompletedTasks: async () => {
        await axios.delete(APIURL);
    },
    updateTask: async (taskId, updateTodoArr) => {
        await axios.patch(APIURL + taskId, updateTodoArr);
    },
    filterTasks: async (filterName) => {
        const {data: toDoList} = await axios.get(`${APIURL}/filter/`+ filterName);
        return toDoList;
    },
    // Users
    getUsers: async () => {
        const {data: toDoList} = await axios.get(APIURLusers);
        return toDoList;
    },
    userLogin: async (loginCredentials) => {
        const {data: userData} = await axios.post(`${APIURLusers}login/`,loginCredentials);
    },
    postUser: async (addUser) => {
        await axios.post(`${APIURLusers}signup/`, addUser);
    },
    deleteUser: async (userId) => {
        await axios.delete(APIURLusers + userId);
    },
    updateUser: async (userId, updateTodoArr) => {
        await axios.patch(APIURLusers + userId, updateTodoArr);
    },
}
export default API;