import { ValuesType } from './UtilTypes.ts';

export type User = {
  id: number,
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
  cityName: string,
};

export type UserWithoutID = Omit<User, 'id'>;

export type ProfileModalUser = {
  name: string,
  surname: string,
  userRole: RoleType,
};

export enum RoleType {
  ADMIN = 'ADMIN',
  WORKER = 'WORKER',
  CLIENT = 'CLIENT',
}

export const UserGender = {
  MAN: 'MAN',
  WOMAN: 'Woman',
} as const;

export type UserGenderType = ValuesType<typeof UserGender>;

export const INITIAL_EDIT_USER_VALUES: UserWithoutID = {
  userRole: RoleType.CLIENT,
  email: '',
  phoneNumber: '',
  postalCode: '',
  streetName: '',
  username: '',
  age: 0,
  name: '',
  countryName: '',
  pesel: '',
  surname: '',
  userGender: UserGender.MAN,
  cityName: '',
};

export const INITIAL_USER_DETAILS_VALUES: User = {
  id: 0,
  userRole: RoleType.CLIENT,
  email: '',
  phoneNumber: '',
  postalCode: '',
  streetName: '',
  username: '',
  age: 0,
  name: '',
  countryName: '',
  pesel: '',
  surname: '',
  userGender: UserGender.MAN,
  cityName: '',
};
