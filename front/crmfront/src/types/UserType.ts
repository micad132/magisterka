import { ValuesType } from './UtilTypes.ts';

export type User = {
  id: string,
  role: RoleType,
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
};

export type UserWithoutID = Omit<User, 'id'>;

export enum RoleType {
  ADMIN = 'Admin',
  WORKER = 'Worker',
  CLIENT = 'CLIENT',
}

export const UserGender = {
  MAN: 'MAN',
  WOMAN: 'Woman',
} as const;

export type UserGenderType = ValuesType<typeof UserGender>;

export const INITIAL_EDIT_USER_VALUES: UserWithoutID = {
  role: RoleType.CLIENT,
  email: '',
  phoneNumber: '',
  postalCode: '',
  streetName: '',
  username: '',
};
