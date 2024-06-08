import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_USER_DETAILS_VALUES, User } from '../types/UserType.ts';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';
import { AddingSupport, Support, SupportRequestType } from '../types/SupportRequest.ts';
import SupportRequestService from '../services/SupportRequestService.ts';

// interface ResponseType<T> {
//   success: boolean;
//   data: T;
// }

interface SupportRequestSliceInitialState {
  supportRequests: Support[],

}

const initialState: SupportRequestSliceInitialState = {
  supportRequests: [],
};

export const fetchSupportRequestsThunk = createAsyncThunk(
  'supportRequest/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await SupportRequestService.getSupportRequests();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const addingSupportRequestThunk = createAsyncThunk(
  'supportSlice/addSupportRequest',
  async (supportRequest: AddingSupport, { rejectWithValue }) => {
    try {
      await SupportRequestService.addSupportRequest(supportRequest);
      const data = await SupportRequestService.getSupportRequests();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteSupportRequestThunk = createAsyncThunk(
  'supportSlice/deleteSupportRequest',
  async (supportId: number) => {
    try {
      await SupportRequestService.deleteSupportRequest(supportId);
      const data = await SupportRequestService.getSupportRequests();
      return data;
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw e.response.data;
    }
  },
);

export const getAllSupportRequests = (state: RootState): Support[] => state.supportRequest.supportRequests;

const supportRequestSlice = createSlice({
  name: 'supportRequestSlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSupportRequestsThunk.fulfilled, (state, action) => {
        state.supportRequests = action.payload;
      });
    builder.addCase(deleteSupportRequestThunk.fulfilled, (state, action) => {
      state.supportRequests = action.payload;
    });
    builder.addCase(addingSupportRequestThunk.fulfilled, (state, action) => {
      state.supportRequests = action.payload;
    });
  },
});

export default supportRequestSlice.reducer;
