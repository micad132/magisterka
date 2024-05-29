import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import LayoutContainer from './layout/layout.container.tsx';
import { useAppDispatch } from './utils/hooks.ts';
import { fetchAllUsersThunk, fetchUserDetailsThunk } from './store/userSlice.tsx';
import { fetchSupportRequestsThunk } from './store/supportRequestSlice.tsx';
import { fetchMessagesThunk } from './store/messageSlice.tsx';
import { fetchTasksThunk } from './store/taskSlice.tsx';
import AppRoutes from './routes';
import { fetchHistoriesThunk } from './store/historySlice.tsx';

axios.defaults.withCredentials = true;

const AppWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    color: #fff;
`;

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllUsersThunk());
    dispatch(fetchSupportRequestsThunk());
    dispatch(fetchUserDetailsThunk());
    dispatch(fetchMessagesThunk());
    dispatch(fetchTasksThunk());
    dispatch(fetchHistoriesThunk());
  }, []);
  return (
    <AppWrapper>
      <LayoutContainer>
        <AppRoutes />
      </LayoutContainer>
    </AppWrapper>
  );
};

export default App;
