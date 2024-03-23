import { Route, Routes } from 'react-router-dom';
import App from '../App';
import RegisterPage from '../pages/AuthPage/RegisterPage/RegisterPage.container.js';
import LoginPage from '../pages/AuthPage/LoginPage/LoginPage.container.js';

const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
);

export default routes;
