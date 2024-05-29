import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService.ts';
import SupportRequestService from '../services/SupportRequestService.ts';
import { RootState } from '../types/StoreTypes.ts';
import { AddHistory, HistoryType } from '../types/HistoryType.ts';
import HistoryService from '../services/HistoryService.ts';

interface HistorySliceInitialState {
  histories: HistoryType[],
}

const initialState: HistorySliceInitialState = {
  histories: [],
};

export const fetchHistoriesThunk = createAsyncThunk(
  'historySlice/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await HistoryService.getAllHistories();
      return data.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const addHistoryThunk = createAsyncThunk(
  'historySlice/addHistory',
  async (historyBody: AddHistory, { rejectWithValue }) => {
    try {
      await HistoryService.addHistory(historyBody);
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteHistoryThunk = createAsyncThunk(
  'historySlice/deleteHistory',
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

export const getAllHistories = (state: RootState): HistoryType[] => state.history.histories;

const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchHistoriesThunk.fulfilled, (state, action) => {
      state.histories = action.payload;
    });
  },
});

export default historySlice.reducer;
