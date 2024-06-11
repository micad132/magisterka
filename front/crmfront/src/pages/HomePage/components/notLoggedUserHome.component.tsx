import BadRouteWrapperComponent from '../../../components/routesComponents/badRouteWrapper.component';
import NotLoggedUserFunctionsComponent from './notLoggedUserFunctions.component.tsx';

const clientFunc: string[] = [
  'Create tasks as services',
  'Change your personal data',
  'Send support requests',
  'Do surveys',
  'Message to other poeple in system',
  'Create comments in tasks',
];

const workerFunc: string[] = [
  'Edit task details',
  'Change task info',
  'Preview existing data in system',

];

const adminFunc: string[] = [
  'Delete tasks',
  'Delete messages',
  'Manage support requests',
  'Manage surveys',
  'Manage people',
  'Manage stats',
  'Filter people',
];

const NotLoggedUserHomeComponent = () => (
  <BadRouteWrapperComponent>
    <p>You are not logged into the system!</p>
    <p>Login as client to:</p>
    <NotLoggedUserFunctionsComponent functions={clientFunc} />
    <p>Login as worker to:</p>
    <NotLoggedUserFunctionsComponent functions={workerFunc} />
    <p>Login as admin to:</p>
    <NotLoggedUserFunctionsComponent functions={adminFunc} />
  </BadRouteWrapperComponent>
);

export default NotLoggedUserHomeComponent;
