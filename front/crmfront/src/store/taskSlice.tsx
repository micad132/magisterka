import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';
import SupportRequestService from '../services/SupportRequestService.ts';
import {
  AddingTask, EditTaskPreview, TaskPreview, TaskResponseDTO,
} from '../types/TaskType.ts';
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
  async (taskId: number, { rejectWithValue }) => {
    try {
      await TaskService.deleteTask(taskId);
      const data = await TaskService.getAllTasks();
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  },
);

export const editTaskPreviewThunk = createAsyncThunk(
  'supportSlice/editTaskPreview',
  async (editPreview: EditTaskPreview, { rejectWithValue }) => {
    try {
      await TaskService.editPreview(editPreview);
      const data = await TaskService.getAllTasks();
      return data;
    } catch (e) {
      return rejectWithValue(e);
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
    builder.addCase(editTaskPreviewThunk.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export default taskSlice.reducer;
