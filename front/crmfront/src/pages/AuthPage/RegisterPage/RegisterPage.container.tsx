import { Form, Formik } from 'formik';
import { Button, FormLabel, Input } from '@chakra-ui/react';
import styled from 'styled-components';
import {
  INITIAL_LOGIN_AUTH_VALUES,
  INITIAL_REGISTER_AUTH_VALUES,
  LoginAuth,
  RegisterAuth,
} from '../../../types/AuthTypes.ts';
import AuthWrapperInside from '../../../components/authWrapperInside.component.tsx';
import RegisterLink from '../LoginPage/components/registerLink.component.tsx';

const RegisterPageWrapper = styled.div`
  color: var(--font-color);  

`;

const RegisterPage = () => (
  <RegisterPageWrapper>
    <h1>Register</h1>
    <Formik
      initialValues={INITIAL_REGISTER_AUTH_VALUES}
      onSubmit={(values: RegisterAuth, actions) => {
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
            <FormLabel>City name</FormLabel>
            <Input name="cityName" placeholder="City name" value={values.cityName} onChange={handleChange} />
            <FormLabel>Street name</FormLabel>
            <Input name="streetName" placeholder="Street name" value={values.streetName} onChange={handleChange} />
            <FormLabel>Postal code</FormLabel>
            <Input name="postalCode" placeholder="Postal code" value={values.postalCode} onChange={handleChange} />
            <Button type="submit" variant="solid" colorScheme="teal">Submit</Button>
          </AuthWrapperInside>
        </Form>
      )}
    </Formik>
  </RegisterPageWrapper>
);

export default RegisterPage;
