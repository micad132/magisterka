import * as Yup from 'yup';

export const loginScheme = Yup.object().shape({
  username: Yup.string().required('Username is required').min(5).max(30),
  password: Yup.string().required('Password is required').min(5).max(30),
});

export const registerScheme = Yup.object().shape({
  username: Yup.string().required('Username is required').min(5).max(30),
  name: Yup.string().required('Name is required').min(3).max(30),
  age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
  email: Yup.string().required('Email is required').email(),
  surname: Yup.string()
    .required('Surname is required')
    .matches(/^[a-zA-Z]+$/, 'Name must contain only letters'),
  postalCode: Yup.string()
    .matches(/^\d{2}-\d{3}$/, 'Postal code must be in the format XX-XXX')
    .required('Postal code is required'),
  cityName: Yup.string()
    .required('City name is required')
    .matches(/^[a-zA-Z]+$/, 'City name must contain only letters'),
  countryName: Yup.string()
    .required('City name is required')
    .matches(/^[a-zA-Z]+$/, 'City name must contain only letters'),
  pesel: Yup.string()
    .required('Pesel is required')
    .min(11, 'Pesel must contain 11 digits')
    .max(11, 'Pesel must contain 11 digits')
    .matches(/^[0-9]+$/, 'Pesel must contain only digits'),
  streetName: Yup.string()
    .required('Street name is required')
    .matches(/^[a-zA-Z]+$/, 'Street name must contain only letters'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .min(9, 'Phone number must have 9 digits')
    .max(9, 'Phone number must have 9 digits')
    .matches(/^[0-9]+$/, 'Phone number name must contain only digits'),
});
