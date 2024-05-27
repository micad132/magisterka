import BadRouteWrapperComponent from './badRouteWrapper.component.tsx';

const NoPermissionComponent = () => (
  <BadRouteWrapperComponent>
    <p>You have no permission to view this page!</p>
  </BadRouteWrapperComponent>
);

export default NoPermissionComponent;
