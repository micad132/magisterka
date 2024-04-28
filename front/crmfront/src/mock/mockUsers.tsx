import { RoleType, UserWithoutID } from '../types/UserType.ts';

// eslint-disable-next-line import/prefer-default-export
export const MockedUsers: UserWithoutID[] = [
  {
    username: 'mikad132',
    streetName: 'karmelowa',
    role: RoleType.CLIENT,
    email: 'mikad132@gmailcom',
    phoneNumber: '123456789',
    postalCode: '12-345',
  },
  {
    username: 'john_doe',
    streetName: 'Maple Street',
    role: RoleType.WORKER,
    email: 'john_doe@example.com',
    phoneNumber: '987654321',
    postalCode: '54-321',
  },
  {
    username: 'alice_smith',
    streetName: 'Oak Avenue',
    role: RoleType.CLIENT,
    email: 'alice_smith@example.com',
    phoneNumber: '555666777',
    postalCode: '87-654',
  },
  {
    username: 'sam_green',
    streetName: 'Elm Road',
    role: RoleType.WORKER,
    email: 'sam_green@example.com',
    phoneNumber: '333222111',
    postalCode: '78-901',
  },
  {
    username: 'emily_wang',
    streetName: 'Pine Lane',
    role: RoleType.CLIENT,
    email: 'emily_wang@example.com',
    phoneNumber: '222333444',
    postalCode: '34-567',
  },
  {
    username: 'david_brown',
    streetName: 'Cedar Drive',
    role: RoleType.WORKER,
    email: 'david_brown@example.com',
    phoneNumber: '777888999',
    postalCode: '65-432',
  },
  {
    username: 'sarah_kim',
    streetName: 'Sycamore Avenue',
    role: RoleType.CLIENT,
    email: 'sarah_kim@example.com',
    phoneNumber: '888999000',
    postalCode: '98-765',
  },
];
