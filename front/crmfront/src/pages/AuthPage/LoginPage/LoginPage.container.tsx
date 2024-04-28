import { Button, FormLabel, Input } from '@chakra-ui/react';
import {
  Formik, Form, FormikHelpers, FormikProps, FormikValues,
} from 'formik';
import AuthWrapperInside from '../../../components/authWrapperInside.component.tsx';
import { INITIAL_LOGIN_AUTH_VALUES, LoginAuth } from '../../../types/AuthTypes.ts';
import AuthWrapper from '../components/authWrapper.component.tsx';
import RegisterLink from './components/registerLink.component.tsx';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginPage = () => (
  <AuthWrapper>
    <h1>Login</h1>
    <Formik
      initialValues={INITIAL_LOGIN_AUTH_VALUES}
      onSubmit={(values: LoginAuth, actions) => {
        console.log(values); // Możesz zastosować własną logikę obsługi formularza tutaj
        actions.setFieldError('email', 'jd');
        actions.setSubmitting(false);
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
            <FormLabel>Email address</FormLabel>
            <Input name="email" placeholder="Email" value={values.email} onChange={handleChange} />
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange} />
            <FormLabel>Confirm Password</FormLabel>
            <Input name="confirmpassword" type="password" placeholder="Confirm Password" value={values.confirmPassword} onChange={handleChange} />
            <Button type="submit" variant="solid" colorScheme="twitter">Submit</Button>
            <RegisterLink />
          </AuthWrapperInside>
        </Form>
      )}
    </Formik>
  </AuthWrapper>
);

export default LoginPage;
