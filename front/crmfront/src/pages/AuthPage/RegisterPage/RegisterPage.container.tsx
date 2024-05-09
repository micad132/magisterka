import { Form, Formik } from 'formik';
import { Button, useToast } from '@chakra-ui/react';
import styled from 'styled-components';
import axios from 'axios';
import { INITIAL_REGISTER_AUTH_VALUES, RegisterAuth } from '../../../types/AuthTypes.ts';
import AuthWrapperInside from '../../../components/authWrapperInside.component.tsx';
import AuthWrapper from '../components/authWrapper.component.tsx';
import InputComponent from '../../../components/form/input.component.tsx';
import RoleTagComponent from '../../../components/roleTag.component.tsx';
import { RoleType } from '../../../types/UserType.ts';
import AuthService from '../../../services/AuthService.ts';

const InitialRole = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: max-content;
    gap: 10px;
    margin: 10px 0;
`;

const RegisterPage = () => {
  const toast = useToast();

  return (
    <AuthWrapper>
      <h1>Register</h1>
      <Formik
        initialValues={INITIAL_REGISTER_AUTH_VALUES}
        onSubmit={async (values: RegisterAuth, actions) => {
          console.log(values); // Możesz zastosować własną logikę obsługi formularza tutaj

          const tescik: RegisterAuth = {
            ...values,
            userRole: RoleType.CLIENT,
          };
          try {
            const data = await AuthService.registerUser(tescik);
            console.log('DATA', data);
            toast({
              title: 'Successfully registered!',
              description: 'You have successfully registered your account!',
              status: 'success',
              duration: 9000,
              isClosable: true,
              position: 'bottom-right',
            });
          } catch (e) {
            console.error('');
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
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                label="Email"
                type="email"
              />
              <InputComponent
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
                label="Name"
                type="text"
              />
              <InputComponent
                name="surname"
                value={values.surname}
                onChange={handleChange}
                placeholder="Surname"
                label="Surname"
                type="text"
              />
              <InputComponent
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Username"
                label="Username"
                type="text"
              />
              <InputComponent
                name="pesel"
                value={values.pesel}
                onChange={handleChange}
                placeholder="Pesel"
                label="Pesel"
                type="text"
              />
              <InputComponent
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                label="Password"
                type="password"
              />
              <InputComponent
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                label="Confirm Password"
                type="password"
              />
              <InputComponent
                name="countryName"
                value={values.countryName}
                onChange={handleChange}
                placeholder="Country name"
                label="Country name"
                type="string"
              />
              <InputComponent
                name="cityName"
                value={values.cityName}
                onChange={handleChange}
                placeholder="City name"
                label="City name"
                type="string"
              />
              <InputComponent
                name="streetName"
                value={values.streetName}
                onChange={handleChange}
                placeholder="Street name"
                label="Street name"
                type="string"
              />
              <InputComponent
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
                placeholder="Postal code"
                label="Postal code"
                type="string"
              />
              <InputComponent
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                placeholder="Phone number"
                label="Phone number"
                type="string"
              />
              <InitialRole>
                <p>Your initial role:</p>
                <RoleTagComponent
                  role={RoleType.CLIENT}
                />
              </InitialRole>
              <Button type="submit" variant="solid" colorScheme="teal">Submit</Button>
              <Button
                variant="solid"
                colorScheme="teal"
                onClick={async () => {
                  const test = await axios.get('http://localhost:8080/api/v1/user/test');
                }}
              >TEST
              </Button>
            </AuthWrapperInside>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default RegisterPage;
