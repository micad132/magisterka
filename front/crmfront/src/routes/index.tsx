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
import PrivateRouteComponent from '../components/routesComponents/privateRoute.component.tsx';
import AdminOnlyRouteComponent from '../components/routesComponents/adminOnlyRoute.component.tsx';
import StatsPageContainer from '../pages/StatsPage/statsPage.container.tsx';

const AppRoutes = () => (
  <Routes>
    <Route element={<PrivateRouteComponent isHomeScreen />}>
      <Route path="/" element={<HomePage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route element={<PrivateRouteComponent isHomeScreen={false} />}>
      <Route element={<AdminOnlyRouteComponent />}>
        <Route path="/people" element={<PeoplePageContainer />} />
        <Route path="/stats" element={<StatsPageContainer />} />
      </Route>
      <Route path="/tasks" element={<TaskPageContainer />} />
      <Route path="/tasks/:id" element={<SingleTaskPageContainer />} />
      <Route path="/history" element={<HistoryPageContainer />} />
      <Route path="/messages" element={<MessagesPageContainer />} />
      <Route path="/profile" element={<ProfilePageContainer />} />
      <Route path="/failed" element={<FailedLoginPageContainer />} />
      <Route path="/support" element={<SupportPageContainer />} />
      <Route path="/test" element={<MyComponent />} />
    </Route>
  </Routes>
);

export default AppRoutes;
