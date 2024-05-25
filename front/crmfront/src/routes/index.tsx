import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/AuthPage/RegisterPage/RegisterPage.container.js';
import LoginPage from '../pages/AuthPage/LoginPage/LoginPage.container.js';
import HomePage from '../pages/HomePage/homePage.container.js';
import TaskPageContainer from '../pages/TaskPage/taskPage.container.tsx';
import PeoplePageContainer from '../pages/PeoplePage/peoplePage.container.tsx';
import HistoryPageContainer from '../pages/HistoryPage/historyPage.container.tsx';
import MessagesPageContainer from '../pages/MessagesPage/messagesPage.container.tsx';
import ProfilePageContainer from '../pages/ProfilePage/profilePage.container.tsx';
import FailedLoginPageContainer from '../pages/FailedLoginPage/failedLoginPage.container.tsx';
import SupportPageContainer from '../pages/SupportPage/supportPage.container.tsx';
import MyComponent from '../pages/TestPage/testPage.container.tsx';
import SingleTaskPageContainer from '../pages/SingleTaskPage/singleTaskPage.container.tsx';

const routes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/tasks" element={<TaskPageContainer />} />
    <Route path="/tasks/:id" element={<SingleTaskPageContainer />} />
    <Route path="/people" element={<PeoplePageContainer />} />
    <Route path="/history" element={<HistoryPageContainer />} />
    <Route path="/messages" element={<MessagesPageContainer />} />
    <Route path="/profile" element={<ProfilePageContainer />} />
    <Route path="/failed" element={<FailedLoginPageContainer />} />
    <Route path="/support" element={<SupportPageContainer />} />
    <Route path="/test" element={<MyComponent />} />
  </Routes>
);

export default routes;
