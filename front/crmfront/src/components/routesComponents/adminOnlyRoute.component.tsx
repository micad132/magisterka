import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks.ts';
import { getUserDetails } from '../../store/userSlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import NoPermissionComponent from './noPermission.component.tsx';

const AdminOnlyRouteComponent = () => {
  const { userRole } = useAppSelector(getUserDetails);
  return (
    userRole === RoleType.ADMIN ? <Outlet /> : <NoPermissionComponent />
  );
};

export default AdminOnlyRouteComponent;
