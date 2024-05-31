import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title, PointElement, LineElement, BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import LayoutContainer from './layout/layout.container.tsx';
import { useAppDispatch } from './utils/hooks.ts';
import { fetchAllUsersThunk, fetchUserDetailsThunk } from './store/userSlice.tsx';
import { fetchSupportRequestsThunk } from './store/supportRequestSlice.tsx';
import { fetchMessagesThunk } from './store/messageSlice.tsx';
import { fetchTasksThunk } from './store/taskSlice.tsx';
import AppRoutes from './routes';
import { fetchHistoriesThunk } from './store/historySlice.tsx';
import { fetchStatsThunk } from './store/statSlice.tsx';

// Rejestrowanie elementów Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  BarElement,
);

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
    dispatch(fetchStatsThunk());
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
