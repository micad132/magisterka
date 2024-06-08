import {
  Button, useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import AuthWrapperInside from '../../../components/authWrapperInside.component.tsx';
import { INITIAL_LOGIN_AUTH_VALUES, LoginAuth } from '../../../types/AuthTypes.ts';
import AuthWrapper from '../components/authWrapper.component.tsx';
import RegisterLink from './components/registerLink.component.tsx';
import InputComponent from '../../../components/form/input.component.tsx';
import { useAppDispatch } from '../../../utils/hooks.ts';
import { fetchAllUsersThunk, fetchUserDetailsThunk, setLoggedUser } from '../../../store/userSlice.tsx';
import { fetchSupportRequestsThunk } from '../../../store/supportRequestSlice.tsx';
import { fetchMessagesThunk } from '../../../store/messageSlice.tsx';
import { fetchTasksThunk } from '../../../store/taskSlice.tsx';
import PinInputComponent from '../../../components/form/pinInput.component.tsx';
import { fetchHistoriesThunk } from '../../../store/historySlice.tsx';
import { fetchStatsThunk } from '../../../store/statSlice.tsx';
import { fetchSurveysThunk } from '../../../store/surveySlice.tsx';
import { fetchCommentsThunk } from '../../../store/commentsSlice.tsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [loginValues, setLoginValues] = useState<LoginAuth>(INITIAL_LOGIN_AUTH_VALUES);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const obj = {
        username: loginValues.username,
        password: loginValues.password,
        code2FA: Number(loginValues.code),
      };
      const data = await axios.post('http://localhost:8080/auth/signin', obj, {
        withCredentials: true,
      });
      console.log('wbilem', data.data);
      dispatch(setLoggedUser(data.data));
      toast({
        title: 'Logged in!',
        description: `You have successfully logged in as ${data.data.name} ${data.data.surname}`,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
      dispatch(fetchAllUsersThunk());
      dispatch(fetchSupportRequestsThunk());
      dispatch(fetchUserDetailsThunk());
      dispatch(fetchMessagesThunk());
      dispatch(fetchTasksThunk());
      dispatch(fetchHistoriesThunk());
      dispatch(fetchStatsThunk());
      dispatch(fetchSurveysThunk());
      dispatch(fetchCommentsThunk());
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    } catch (e: any) {
      console.log('e', e);
      toast({
        title: 'Login went wrong!',
        // description: `${e.response.data.message}`,
        description: 'test',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  return (
    <AuthWrapper>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <AuthWrapperInside>
          <InputComponent
            label="Username"
            value={loginValues.username}
            onChange={(e) => {
              setLoginValues((prevState) => ({
                ...prevState,
                username: e.target.value,
              }));
            }}
            name="username"
            placeholder="Username"
            type="text"
            isInvalid={false}
          />
          <InputComponent
            label="Password"
            value={loginValues.password}
            onChange={(e) => {
              setLoginValues((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
            name="password"
            placeholder="Password"
            type="password"
            isInvalid={false}
          />
          <PinInputComponent
            setValue={(e) => {
              setLoginValues((prevState) => ({
                ...prevState,
                code: e,
              }));
            }}
            value={loginValues.code}
            label="Provide your secret 2fa code"
          />
          <Button type="submit" variant="solid" colorScheme="twitter">Submit</Button>
          <RegisterLink />
        </AuthWrapperInside>
      </form>
    </AuthWrapper>
  );
};

export default LoginPage;
