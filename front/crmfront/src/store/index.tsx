import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import supportRequestReducer from './supportRequestSlice.tsx';
import messagesReducer from './messageSlice.tsx';

export const store = configureStore({
  reducer: {
    user: userReducer,
    supportRequest: supportRequestReducer,
    messages: messagesReducer,
  },
});
