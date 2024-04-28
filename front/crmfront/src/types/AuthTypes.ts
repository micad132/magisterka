export type LoginAuth = {
  email: string,
  password: string,
  confirmPassword:string,
};

export type RegisterAuth = {
  email: string,
  password: string,
  confirmPassword: string,
  cityName: string,
  streetName: string,
  postalCode: string,
  age: number,
};

export const INITIAL_LOGIN_AUTH_VALUES: LoginAuth = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const INITIAL_REGISTER_AUTH_VALUES: RegisterAuth = {
  email: '',
  age: 0,
  cityName: '',
  confirmPassword: '',
  password: '',
  postalCode: '',
  streetName: '',
};
