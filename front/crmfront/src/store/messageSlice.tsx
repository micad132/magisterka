import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_USER_DETAILS_VALUES, User } from '../types/UserType.ts';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';
import { AddingSupport, Support, SupportRequestType } from '../types/SupportRequest.ts';
import SupportRequestService from '../services/SupportRequestService.ts';
import { AddingMessage, MessageType } from '../types/MessageType.ts';
import MessagesService from '../services/MessagesService.ts';

// interface ResponseType<T> {
//   success: boolean;
//   data: T;
// }

interface MessageSliceInitialState {
  messages: MessageType[],
}

const initialState: MessageSliceInitialState = {
  messages: [],
};

export const fetchMessagesThunk = createAsyncThunk(
  'messageSlice/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await MessagesService.getAllMessages();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const addingMessageThunk = createAsyncThunk(
  'messageSlice/addMessage',
  async (messageBody: AddingMessage, { rejectWithValue }) => {
    try {
      await MessagesService.addMessage(messageBody);
      const data = await MessagesService.getAllMessages();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteMessageThunk = createAsyncThunk(
  'messageSlice/deleteMessage',
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

export const getAllMessages = (state: RootState): MessageType[] => state.messages.messages;

const messagesSlice = createSlice({
  name: 'messagesSlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMessagesThunk.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
    builder.addCase(addingMessageThunk.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export default messagesSlice.reducer;
