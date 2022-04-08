import axios from 'axios';

const APIURL = 'https://node-todo-api-heroku-websmart.herokuapp.com/api/tasks';

const API = {
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
}
export default API;