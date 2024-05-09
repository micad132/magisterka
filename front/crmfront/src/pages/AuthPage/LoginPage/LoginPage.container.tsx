import {
  Button, FormLabel, Input, useToast,
} from '@chakra-ui/react';
import {
  Formik, Form, FormikHelpers, FormikProps, FormikValues,
} from 'formik';
import { useNavigate } from 'react-router-dom';
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
  return (
    <AuthWrapper>
      <h1>Login</h1>
      <Formik
        initialValues={INITIAL_LOGIN_AUTH_VALUES}
        onSubmit={async (values: LoginAuth, actions) => {
          console.log(values); // Możesz zastosować własną logikę obsługi formularza tutaj
          actions.setFieldError('email', 'jd');
          actions.setSubmitting(false);

          const formData = new FormData();
          formData.append('username', values.username);
          formData.append('password', values.password);
          const logincosik: Login = {
            username: values.username,
            password: values.password,
          };

          try {
            const data = await AuthService.loginUser(formData);
            // toast({
            //   title: 'Successfully logged in!',
            //   description: 'You have successfully logged into the system. You will be navigated to home page in 2 seconds!',
            //   status: 'success',
            //   duration: 9000,
            //   isClosable: true,
            //   position: 'bottom-right',
            // });
            setTimeout(() => navigate('/', { replace: true }), 2000);
            console.log('dhs', data);
          } catch (e) {
            console.error(e);
          }
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <AuthWrapperInside>
              <InputComponent
                label="Username"
                value={values.username}
                onChange={handleChange}
                name="username"
                placeholder="Username"
                type="text"
              />
              <InputComponent
                label="Password"
                value={values.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                type="password"
              />
              <InputComponent
                label="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                placeholder="Confirm password"
                type="password"
              />
              <Button type="submit" variant="solid" colorScheme="twitter">Submit</Button>
              <RegisterLink />
            </AuthWrapperInside>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default LoginPage;
