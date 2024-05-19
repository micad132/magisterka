import {
  Button, FormLabel, Input, useToast,
} from '@chakra-ui/react';
import {
  Formik, Form, FormikHelpers, FormikProps, FormikValues,
} from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthWrapperInside from '../../../components/authWrapperInside.component.tsx';
import { INITIAL_LOGIN_AUTH_VALUES, Login, LoginAuth } from '../../../types/AuthTypes.ts';
import AuthWrapper from '../components/authWrapper.component.tsx';
import RegisterLink from './components/registerLink.component.tsx';
import InputComponent from '../../../components/form/input.component.tsx';
import AuthService from '../../../services/AuthService.ts';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [loginValues, setLoginValues] = useState<LoginAuth>(INITIAL_LOGIN_AUTH_VALUES);

  return (
    <AuthWrapper>
      <h1>Login</h1>
      <form method="post" action="http://localhost:8080/login">
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
          <RegisterLink />
        </AuthWrapperInside>
      </form>
    </AuthWrapper>
  );
};

export default LoginPage;
