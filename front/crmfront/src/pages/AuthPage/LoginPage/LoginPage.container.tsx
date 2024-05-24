import {
  Button, FormLabel, Input, useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import AuthWrapperInside from '../../../components/authWrapperInside.component.tsx';
import { INITIAL_LOGIN_AUTH_VALUES, LoginAuth } from '../../../types/AuthTypes.ts';
import AuthWrapper from '../components/authWrapper.component.tsx';
import RegisterLink from './components/registerLink.component.tsx';
import InputComponent from '../../../components/form/input.component.tsx';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [loginValues, setLoginValues] = useState<LoginAuth>(INITIAL_LOGIN_AUTH_VALUES);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = {
      username: loginValues.username,
      password: loginValues.password,
    };
    const data = await axios.post('http://localhost:8080/login', form, {
      withCredentials: true,
    });
    console.log('wbilem', data);
  };

  const test = async () => {
    const res = await axios.get('http://localhost:8080/api/v1/user/test');
    console.log('res', res);
  };

  return (
    <AuthWrapper>
      <h1>Login</h1>
      <form action="http://localhost:8080/login" method="post">
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
          {/* <InputComponent */}
          {/*  label="Confirm password" */}
          {/*  value={loginValues.confirmPassword} */}
          {/*  onChange={(e) => { */}
          {/*    setLoginValues((prevState) => ({ */}
          {/*      ...prevState, */}
          {/*      confirmPassword: e.target.value, */}
          {/*    })); */}
          {/*  }} */}
          {/*  name="confirmPassword" */}
          {/*  placeholder="Confirm password" */}
          {/*  type="password" */}
          {/* /> */}
          <Button type="submit" variant="solid" colorScheme="twitter">Submit</Button>
          <Button onClick={test} variant="solid" colorScheme="twitter">TEST</Button>
          <RegisterLink />
        </AuthWrapperInside>
      </form>
    </AuthWrapper>
  );
};

export default LoginPage;
