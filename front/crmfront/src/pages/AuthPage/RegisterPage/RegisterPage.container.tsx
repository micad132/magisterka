import { Form, Formik } from 'formik';
import { Button, useDisclosure, useToast } from '@chakra-ui/react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_REGISTER_AUTH_VALUES, RegisterAuth, RegisterAuthResponse } from '../../../types/AuthTypes.ts';
import AuthWrapperInside from '../../../components/authWrapperInside.component.tsx';
import AuthWrapper from '../components/authWrapper.component.tsx';
import InputComponent from '../../../components/form/input.component.tsx';
import RoleTagComponent from '../../../components/roleTag.component.tsx';
import { RoleType, UserGender } from '../../../types/UserType.ts';
import AuthService from '../../../services/AuthService.ts';
import { registerScheme } from '../../../services/validators/UserValidator.ts';
import CodeModalComponent from './components/codeModal.component.tsx';
import SelectComponent from '../../../components/form/select.component.tsx';
import { SelectValue } from '../../../types/UtilTypes.ts';

const InitialRole = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: max-content;
    gap: 10px;
    margin: 10px 0;
`;

const USER_GENDER: SelectValue[] = [
  {
    text: 'Man',
    value: UserGender.MAN,
  },
  {
    text: 'Woman',
    value: UserGender.WOMAN,
  },
];

const RegisterPage = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [qrURL2FA, setQRURL] = useState<string>('');
  const navigate = useNavigate();

  const onCloseHandler = () => {
    onClose();
    navigate('/login', { replace: true });
  };

  return (
    <AuthWrapper>
      <h1>Register</h1>
      <Formik
        initialValues={INITIAL_REGISTER_AUTH_VALUES}
        validationSchema={registerScheme}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values: RegisterAuth, actions) => {
          console.log('HALO');
          try {
            console.log('WCHODZI');
            const tescik: RegisterAuth = {
              ...values,
              userRole: RoleType.CLIENT,
            };
            const { message, qrURL }: RegisterAuthResponse = await AuthService.registerUser(tescik);
            setQRURL(qrURL);
            onOpen();
            console.log('DATA', message);
            console.log('CODE QRURL', qrURL);
            toast({
              title: 'Successfully registered!',
              description: 'You have successfully registered your account!',
              status: 'success',
              duration: 9000,
              isClosable: true,
              position: 'bottom-right',
            });
            actions.resetForm();
          } catch (e) {
            toast({
              title: 'Something went wrong!',
              description: 'There was an error with registering',
              status: 'error',
              duration: 9000,
              isClosable: true,
              position: 'bottom-right',
            });
            console.log(e);
            // Jeśli są błędy walidacji, nie ma potrzeby wyświetlania komunikatu błędu, ponieważ zostaną one już wyświetlone przez Formik
          }
        }}
      >
        {({
          values,
          handleChange,
          errors,
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
                isInvalid={!!errors.email}
                error={errors.email}
              />
              <InputComponent
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
                label="Name"
                type="text"
                isInvalid={false}
                error={errors.name}
              />
              <InputComponent
                name="surname"
                value={values.surname}
                onChange={handleChange}
                placeholder="Surname"
                label="Surname"
                type="text"
                isInvalid={false}
                error={errors.surname}
              />
              <InputComponent
                name="age"
                value={values.age}
                onChange={handleChange}
                placeholder="Age"
                label="Age"
                type="number"
                isInvalid={false}
                error={errors.age}
              />
              <InputComponent
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Username"
                label="Username"
                type="text"
                isInvalid={false}
                error={errors.username}
              />
              <InputComponent
                name="pesel"
                value={values.pesel}
                onChange={handleChange}
                placeholder="Pesel"
                label="Pesel"
                type="text"
                isInvalid={false}
                error={errors.pesel}
              />
              <InputComponent
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                label="Password"
                type="password"
                isInvalid={false}
                error={errors.password}
              />
              <InputComponent
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                label="Confirm Password"
                type="password"
                isInvalid={false}
                error={errors.confirmPassword}
              />
              <InputComponent
                name="countryName"
                value={values.countryName}
                onChange={handleChange}
                placeholder="Country name"
                label="Country name"
                type="string"
                isInvalid={false}
                error={errors.countryName}
              />
              <InputComponent
                name="cityName"
                value={values.cityName}
                onChange={handleChange}
                placeholder="City name"
                label="City name"
                type="string"
                isInvalid={false}
                error={errors.cityName}
              />
              <InputComponent
                name="streetName"
                value={values.streetName}
                onChange={handleChange}
                placeholder="Street name"
                label="Street name"
                type="string"
                isInvalid={false}
                error={errors.streetName}
              />
              <InputComponent
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
                placeholder="Postal code"
                label="Postal code"
                type="string"
                isInvalid={false}
                error={errors.postalCode}
              />
              <InputComponent
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                placeholder="Phone number"
                label="Phone number"
                type="string"
                isInvalid={false}
                error={errors.phoneNumber}
              />
              <SelectComponent
                options={USER_GENDER}
                onChange={handleChange}
                label="Select gender"
              />
              <InitialRole>
                <p>Your initial role:</p>
                <RoleTagComponent
                  role={RoleType.CLIENT}
                />
              </InitialRole>
              <Button type="submit" variant="solid" colorScheme="teal">Submit</Button>
            </AuthWrapperInside>
          </Form>
        )}
      </Formik>
      <CodeModalComponent isOpen={isOpen} onClose={onCloseHandler} qrURL={qrURL2FA} />
    </AuthWrapper>
  );
};

export default RegisterPage;
