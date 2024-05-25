import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddingTask } from '../types/TaskType.ts';

const TaskService = {

  addTask: async (taskModel: AddingTask): Promise<string> => axios({
    method: 'POST',
    url: `${API_URL}/task`,
    data: taskModel,
    headers: {
      'Content-Type': 'application/json', // Dodanie nagłówka Content-Type
    },
  }),

  getAllTasks: async () => {
    const res = await axios.get(`${API_URL}/task`);
    return res.data;
  },
};

export default TaskService;
