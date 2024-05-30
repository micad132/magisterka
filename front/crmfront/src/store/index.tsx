import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import supportRequestReducer from './supportRequestSlice.tsx';
import messagesReducer from './messageSlice.tsx';
import taskReducer from './taskSlice.tsx';
import historyReducer from './historySlice.tsx';
import statReducer from './statSlice.tsx';

export const store = configureStore({
  reducer: {
    user: userReducer,
    supportRequest: supportRequestReducer,
    messages: messagesReducer,
    task: taskReducer,
    history: historyReducer,
    stat: statReducer,
  },
});
