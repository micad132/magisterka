import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import BadRouteWrapperComponent from './badRouteWrapper.component.tsx';

const NotLoggedComponent = () => {
  const navigate = useNavigate();
  return (
    <BadRouteWrapperComponent>
      <p>You are not logged into the system</p>
      <Button onClick={() => navigate('/login', { replace: true })}>LOGIN</Button>
    </BadRouteWrapperComponent>
  );
};

export default NotLoggedComponent;
