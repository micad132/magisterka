import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITIAL_USER_DETAILS_VALUES, User } from '../types/UserType.ts';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';

interface UserSliceInitialState {
  userDetails: User
}

const initialState: UserSliceInitialState = {
  userDetails: INITIAL_USER_DETAILS_VALUES,
};

export const fetchUserDetailsThunk = createAsyncThunk(
  'userSlice/getUserDetails',
  async (_, { rejectWithValue }) => {
    try {
      const data = await UserService.getUserDetails();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const getUserDetails = (state: RootState): User => state.user.userDetails;

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserDetailsThunk.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      });
  },
});

export default userSlice.reducer;
