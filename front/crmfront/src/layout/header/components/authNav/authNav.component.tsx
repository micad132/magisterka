import { Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isLogged: boolean,
}

const AuthNavComponent = ({ isLogged }: Props) => {
  console.log('djjd');

  const toast = useToast();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    toast({
      title: 'Logged out!',
      description: 'You have successfully logged out',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'bottom-right',
    });
    navigate('/', { replace: true });
  };

  const onLoginClick = () => {
    navigate('/login', { replace: true });
  };

  const properContent = isLogged
    ? <Button onClick={onLogoutClick}>LOG OUT</Button>
    : <Button onClick={onLoginClick}>LOGIN</Button>;

  return (
    <div>
      {properContent}
    </div>
  );
};

export default AuthNavComponent;
