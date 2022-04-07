import axios from 'axios';

const API = {
    getTasks: async () => {
        const {data: toDoList} = await axios.get('http://localhost:3005/api/tasks/');
        return toDoList;
    },
    postTask: async (addTodo) => {
        await axios.post('http://localhost:3005/api/tasks/', {taskName : addTodo});
    },
    deleteTask: async (taskId) => {
        await axios.delete('http://localhost:3005/api/tasks/' + taskId);
    },
    completeAllTasks: async () => {
        await axios.patch('http://localhost:3005/api/tasks/');
    },
    removeCompletedTasks: async () => {
        await axios.delete('http://localhost:3005/api/tasks/');
    },
    updateTask: async (taskId, updateTodoArr) => {
        await axios.patch('http://localhost:3005/api/tasks/'+ taskId, updateTodoArr);
    },
    filterTasks: async (filterName) => {
        const {data: toDoList} = await axios.get('http://localhost:3005/api/tasks/filter/'+ filterName);
        return toDoList;
    },
}
export default API;