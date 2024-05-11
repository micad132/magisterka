import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/AuthPage/RegisterPage/RegisterPage.container.js';
import LoginPage from '../pages/AuthPage/LoginPage/LoginPage.container.js';
import HomePage from '../pages/HomePage/homePage.container.js';
import TaskPageContainer from '../pages/TaskPage/taskPage.container.tsx';
import PeoplePageContainer from '../pages/PeoplePage/peoplePage.container.tsx';
import HistoryPageContainer from '../pages/HistoryPage/historyPage.container.tsx';
import MessagesPageContainer from '../pages/MessagesPage/messagesPage.container.tsx';
import ProfilePageContainer from '../pages/ProfilePage/profilePage.container.tsx';

const routes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/tasks" element={<TaskPageContainer />} />
    <Route path="/people" element={<PeoplePageContainer />} />
    <Route path="/history" element={<HistoryPageContainer />} />
    <Route path="/messages" element={<MessagesPageContainer />} />
    <Route path="/profile" element={<ProfilePageContainer />} />
  </Routes>
);

export default routes;
