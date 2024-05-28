import axios from 'axios';
import { API_URL } from '../utils/consts.ts';
import { AddingTask, EditTaskPreview } from '../types/TaskType.ts';

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

  editPreview: async (editPreview: EditTaskPreview) => {
    await axios.patch(`${API_URL}/task/editPreview`, editPreview);
  },
};

export default TaskService;
