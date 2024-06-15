import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_USER_DETAILS_VALUES, User } from '../types/UserType.ts';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';
import { AddingSupport, Support, SupportRequestType } from '../types/SupportRequest.ts';
import SupportRequestService from '../services/SupportRequestService.ts';
import { AddStat, StatResponse } from '../types/StatType.ts';
import StatService from '../services/StatService.ts';

// interface ResponseType<T> {
//   success: boolean;
//   data: T;
// }

interface StatSliceInitialState {
  stats: StatResponse[],

}

const initialState: StatSliceInitialState = {
  stats: [],
};

export const fetchStatsThunk = createAsyncThunk(
  'statSlice/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await StatService.getAllStats();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const addingStatThunk = createAsyncThunk(
  'statSlice/addStat',
  async (statBody: AddStat, { rejectWithValue }) => {
    try {
      await StatService.addStat(statBody);
      const data = await StatService.getAllStats();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteStatThunk = createAsyncThunk(
  'statSlice/deleteStat',
  async (id: number) => {
    try {
      await StatService.deleteStat(id);
      const data = await StatService.getAllStats();
      return data;
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw e.response.data;
    }
  },
);

export const getAllStats = (state: RootState): StatResponse[] => state.stat.stats;

const statSlice = createSlice({
  name: 'statSlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStatsThunk.fulfilled, (state, action) => {
        state.stats = action.payload;
      });
    builder.addCase(addingStatThunk.fulfilled, (state, action) => {
      state.stats = action.payload;
    });
    builder.addCase(deleteStatThunk.fulfilled, (state, action) => {
      state.stats = action.payload;
    });
  },
});

export default statSlice.reducer;
