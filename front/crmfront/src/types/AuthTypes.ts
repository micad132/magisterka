import { RoleType, UserGender, UserGenderType } from './UserType.ts';

export type LoginAuth = {
  username: string,
  password: string,
};

export type Login = {
  username: string,
  password: string,
};

export type RegisterAuth = {
  userRole: RoleType,
  userGender: UserGenderType,
  age: number,
  countryName: string,
  pesel: string,
  username: string,
  streetName: string,
  postalCode: string,
  phoneNumber: string,
  email: string,
  name: string,
  surname: string,
  password: string,
  confirmPassword: string,
  cityName: string,
};

export const INITIAL_LOGIN_AUTH_VALUES: LoginAuth = {
  username: '',
  password: '',
};

export const INITIAL_REGISTER_AUTH_VALUES: RegisterAuth = {
  email: '',
  age: 0,
  cityName: '',
  confirmPassword: '',
  password: '',
  postalCode: '',
  streetName: '',
  countryName: '',
  name: '',
  pesel: '',
  userRole: RoleType.CLIENT,
  userGender: UserGender.MAN,
  username: '',
  phoneNumber: '',
  surname: '',
};
