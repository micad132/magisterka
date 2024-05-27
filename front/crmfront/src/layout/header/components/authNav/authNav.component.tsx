import { Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { getUserDetails, setLoggedUser } from '../../../../store/userSlice.tsx';
import { INITIAL_USER_DETAILS_VALUES } from '../../../../types/UserType.ts';

interface Props {
  isLogged: boolean,
}

const AuthNavComponent = ({ isLogged }: Props) => {
  const toast = useToast();
  const navigate = useNavigate();
  const loggedUser = useAppSelector(getUserDetails);
  const dispatch = useAppDispatch();

  console.log('LOGGED USER', loggedUser);

  const onLogoutClick = async () => {
    try {
      await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
      toast({
        title: 'Logged out!',
        description: 'You have successfully logged out',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
      dispatch(setLoggedUser(INITIAL_USER_DETAILS_VALUES));
      // navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  const onLoginClick = () => {
    navigate('/login', { replace: true });
  };

  const properContent = isLogged
    ? (
      <form method="post" action="http://localhost:8080/logout">
        <Button
          type="submit"
        >
          LOG OUT
        </Button>
      </form>
    )
    : <Button onClick={onLoginClick}>LOGIN</Button>;

  return (
    <div>
      {properContent}
    </div>
  );
};

export default AuthNavComponent;
