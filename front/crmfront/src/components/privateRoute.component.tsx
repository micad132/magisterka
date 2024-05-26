import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../utils/hooks.ts';
import { getUserDetails } from '../store/userSlice.tsx';
import NotLoggedComponent from './notLogged.component.tsx';

const PrivateRouteComponent = () => {
  const { name } = useAppSelector(getUserDetails);
  return (
    name !== '' ? <Outlet /> : <NotLoggedComponent />
  );
};

export default PrivateRouteComponent;
