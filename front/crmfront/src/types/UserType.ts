export type User = {
  id: string,
  role: RoleType,
  username: string,
  streetName: string,
  postalCode: string,
  phoneNumber: string,
  email: string,
};

export type UserWithoutID = Omit<User, 'id'>;

export enum RoleType {
  ADMIN = 'Admin',
  WORKER = 'Worker',
  CLIENT = 'Client',
}

export const INITIAL_EDIT_USER_VALUES: UserWithoutID = {
  role: RoleType.CLIENT,
  email: '',
  phoneNumber: '',
  postalCode: '',
  streetName: '',
  username: '',
};
