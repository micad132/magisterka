import * as Yup from 'yup';

export const loginScheme = Yup.object().shape({
  username: Yup.string().required('Username is required').min(5).max(30),
  password: Yup.string().required('Password is required').min(5).max(30),
});

export const registerScheme = Yup.object().shape({
  username: Yup.string().required('Nazwa użytkownika jest wymagana').min(5).max(30),
  name: Yup.string().required('Imię jest wymagane').min(3).max(30),
  age: Yup.number().required('Wiek jest wymagany').positive('Wiek musi być liczbą dodatnią').integer('Wiek musi być liczbą całkowitą'),
  email: Yup.string().required('Email jest wymagany').email('Nieprawidłowy format email'),
  surname: Yup.string()
    .required('Nazwisko jest wymagane')
    .matches(/^[a-zA-Z]+$/, 'Nazwisko musi zawierać tylko litery'),
  postalCode: Yup.string()
    .matches(/^\d{2}-\d{3}$/, 'Kod pocztowy musi być w formacie XX-XXX')
    .required('Kod pocztowy jest wymagany'),
  cityName: Yup.string()
    .required('Nazwa miasta jest wymagana')
    .matches(/^[a-zA-Z]+$/, 'Nazwa miasta musi zawierać tylko litery'),
  pesel: Yup.string()
    .required('PESEL jest wymagany')
    .min(11, 'PESEL musi zawierać 11 cyfr')
    .max(11, 'PESEL musi zawierać 11 cyfr')
    .matches(/^[0-9]+$/, 'PESEL musi zawierać tylko cyfry'),
  password: Yup.string()
    .required('Hasło jest wymagane')
    .min(10, 'Hasło musi mieć co najmniej 10 znaków')
    .max(30, 'Hasło może mieć maksymalnie 30 znaków')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/,
      'Hasło musi mieć co najmniej 10 znaków, zawierać jedną wielką literę, jedną małą literę, jedną cyfrę i jeden znak specjalny.',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Potwierdzone hasło musi być takie samo jak hasło')
    .required('Potwierdzenie hasła jest wymagane'),
  streetName: Yup.string()
    .required('Nazwa ulicy jest wymagana')
    .matches(/^[a-zA-Z]+$/, 'Nazwa ulicy musi zawierać tylko litery'),
  phoneNumber: Yup.string()
    .required('Numer telefonu jest wymagany')
    .min(9, 'Numer telefonu musi mieć 9 cyfr')
    .max(9, 'Numer telefonu musi mieć 9 cyfr')
    .matches(/^[0-9]+$/, 'Numer telefonu musi zawierać tylko cyfry'),
});
