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
import { PROVINCES_VALUES } from '../../../utils/consts.ts';
import RegisterSelectComponent from './components/registerSelect.component.tsx';

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
      <h1>Zarejestruj się</h1>
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
                placeholder="Imię"
                label="Imię"
                type="text"
                isInvalid={false}
                error={errors.name}
              />
              <InputComponent
                name="surname"
                value={values.surname}
                onChange={handleChange}
                placeholder="Nazwisko"
                label="Nazwisko"
                type="text"
                isInvalid={false}
                error={errors.surname}
              />
              <InputComponent
                name="age"
                value={values.age}
                onChange={handleChange}
                placeholder="Wiek"
                label="Wiek"
                type="number"
                isInvalid={false}
                error={errors.age}
              />
              <InputComponent
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Nazwa użytkownika"
                label="Nazwa użytkownika"
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
                placeholder="Hasło"
                label="Hasło"
                type="password"
                isInvalid={false}
                error={errors.password}
              />
              <InputComponent
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Potwierdź hasło"
                label="Potwierdź haslo"
                type="password"
                isInvalid={false}
                error={errors.confirmPassword}
              />
              <RegisterSelectComponent
                options={PROVINCES_VALUES}
                onChange={handleChange}
                label="Wybierz województwo"
              />
              <InputComponent
                name="cityName"
                value={values.cityName}
                onChange={handleChange}
                placeholder="Miasto"
                label="Miasto"
                type="string"
                isInvalid={false}
                error={errors.cityName}
              />
              <InputComponent
                name="streetName"
                value={values.streetName}
                onChange={handleChange}
                placeholder="Nazwa ulicy"
                label="Nazwa ulicy"
                type="string"
                isInvalid={false}
                error={errors.streetName}
              />
              <InputComponent
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
                placeholder="Kod pocztowy"
                label="Kod pocztowy"
                type="string"
                isInvalid={false}
                error={errors.postalCode}
              />
              <InputComponent
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                placeholder="Numer telefonu"
                label="Numer telefonu"
                type="string"
                isInvalid={false}
                error={errors.phoneNumber}
              />
              <RegisterSelectComponent
                options={USER_GENDER}
                onChange={handleChange}
                label="Wybierz płeć"
              />
              <InitialRole>
                <p>Twoja początkowa rola to:</p>
                <RoleTagComponent
                  role={RoleType.CLIENT}
                />
              </InitialRole>
              <Button type="submit" variant="solid" colorScheme="teal">Zarejestruj się</Button>
            </AuthWrapperInside>
          </Form>
        )}
      </Formik>
      <CodeModalComponent isOpen={isOpen} onClose={onCloseHandler} qrURL={qrURL2FA} />
    </AuthWrapper>
  );
};

export default RegisterPage;
