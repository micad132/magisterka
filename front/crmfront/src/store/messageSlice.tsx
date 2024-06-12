import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService.ts';
import { RootState } from '../utils/hooks.ts';
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
  async (messageId: number, { rejectWithValue }) => {
    try {
      await MessagesService.deleteMessage(messageId);
      const data = await MessagesService.getAllMessages();
      return data;
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      return rejectWithValue(e);
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
    builder.addCase(deleteMessageThunk.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
  },
});

export default messagesSlice.reducer;
