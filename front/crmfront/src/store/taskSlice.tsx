import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';
import SupportRequestService from '../services/SupportRequestService.ts';
import { AddingTask, TaskPreview, TaskResponseDTO } from '../types/TaskType.ts';
import TaskService from '../services/TaskService.ts';

// interface ResponseType<T> {
//   success: boolean;
//   data: T;
// }

interface TaskSliceInitialState {
  taskPreviews: TaskPreview[],
  tasks: TaskResponseDTO[]
}

const initialState: TaskSliceInitialState = {
  taskPreviews: [],
  tasks: [],
};

export const fetchTasksThunk = createAsyncThunk(
  'taskSlice/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await TaskService.getAllTasks();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const addingTaskRequestThunk = createAsyncThunk(
  'taskSlice/addTaskRequest',
  async (taskModel: AddingTask, { rejectWithValue }) => {
    try {
      await TaskService.addTask(taskModel);
      const data = await TaskService.getAllTasks();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteTaskThunk = createAsyncThunk(
  'supportSlice/deleteSupportRequest',
  async (supportId: number) => {
    try {
      await SupportRequestService.deleteSupportRequest(supportId);
      const data = await UserService.getAllUsers();
      return data;
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw e.response.data;
    }
  },
);

export const getAllTasks = (state: RootState): TaskResponseDTO[] => state.task.tasks;

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        state.tasks = action.payload;
      });
    builder.addCase(deleteTaskThunk.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(addingTaskRequestThunk.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export default taskSlice.reducer;
