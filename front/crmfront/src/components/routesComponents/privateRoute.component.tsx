import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks.ts';
import { getUserDetails } from '../../store/userSlice.tsx';
import NotLoggedComponent from './notLogged.component.tsx';
import NotLoggedUserHomeComponent from '../../pages/HomePage/components/notLoggedUserHome.component.tsx';

interface Props {
  isHomeScreen: boolean,
}

const PrivateRouteComponent = ({ isHomeScreen }: Props) => {
  const { name } = useAppSelector(getUserDetails);
  const properNotLoggedComp = isHomeScreen ? <NotLoggedUserHomeComponent /> : <NotLoggedComponent />;
  return (
    name !== '' ? <Outlet /> : properNotLoggedComp
  );
};

export default PrivateRouteComponent;
