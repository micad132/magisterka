import { ValuesType } from './UtilTypes.ts';

export type User = {
  id: number,
  userRole: RoleTypeType,
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
  createdAccountDate: string,
};

export type SelfEditUser = {
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

export type SelfEditUserRequest = SelfEditUser & {
  id: number,
};

export type UserWithoutID = Omit<User, 'id'>;

export type ProfileModalUser = {
  name: string,
  surname: string,
  userRole: RoleTypeType,
};

export type LoggedUserMainDetails = {
  username: string,
  userRole: RoleTypeType,
  createdAccountDate: string,
};

export type LoggedUserDetails = {
  name: string,
  surname: string,
  age: number,
  countryName: string,
  streetName: string,
  cityName: string,
  postalCode: string,
  phoneNumber: string,
  email: string,
  userGender: UserGenderType,
};

export type UserDTOTaskDetailsCreator = {
  creatorUsername: string,
  creatorAge: number,
  creatorCountry: string,
  creatorName: string,
  creatorSurname: string,
};

export type UserDTOTaskDetailsAssignee = {
  assigneeUsername: string,
  assigneeAge: number,
  assigneeCountry: string,
  assigneeName: string,
  assigneeSurname: string,
};

export const RoleType = {
  ADMIN: 'ADMIN',
  WORKER: 'WORKER',
  CLIENT: 'CLIENT',
} as const;

export const UserGender = {
  MAN: 'MAN',
  WOMAN: 'WOMAN',
} as const;

export type UserGenderType = ValuesType<typeof UserGender>;
export type RoleTypeType = ValuesType<typeof RoleType>;

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
  createdAccountDate: '',
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
  createdAccountDate: '',
};

export const INITIAL_SELF_EDIT_USER_VALUES: SelfEditUser = {
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
  cityName: '',
};
