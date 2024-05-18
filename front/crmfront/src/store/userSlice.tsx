import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_USER_DETAILS_VALUES, User } from '../types/UserType.ts';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';

// interface ResponseType<T> {
//   success: boolean;
//   data: T;
// }

interface UserSliceInitialState {
  userDetails: User,
  users: User[],

}

const initialState: UserSliceInitialState = {
  userDetails: INITIAL_USER_DETAILS_VALUES,
  users: [],
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

export const fetchAllUsersThunk = createAsyncThunk(
  'userSlice/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const data = await UserService.getAllUsers();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteUserThunk = createAsyncThunk(
  'userSlice/deleteUser',
  async (userId: number) => {
    try {
      await UserService.deleteUser(userId);
      const data = await UserService.getAllUsers();
      return data;
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw e.response.data;
    }
  },
);

export const getUserDetails = (state: RootState): User => state.user.userDetails;
export const getAllUsers = (state: RootState): User[] => state.user.users;

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {

    setLoggedUser: (state: UserSliceInitialState, action: PayloadAction<User>) => {
      state.userDetails = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserDetailsThunk.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      });
    builder.addCase(fetchAllUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;