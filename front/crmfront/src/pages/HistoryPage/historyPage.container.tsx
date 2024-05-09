import { Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import HistoryTable from './components/historyTable.component.tsx';
import { RoleType, User } from '../../types/UserType.ts';
import LoggedUserInfoComponent from './components/loggedUserInfo.component.tsx';
import HistoryPageHeaderComponent from './components/historyPageHeader.component.tsx';
import { MOCKED_HISTORIES } from '../../mock/mockHistory.tsx';

const MOCKED_CLIENTS: User[] = [
  {
    id: '1',
    role: RoleType.CLIENT,
    username: 'mikad132',
    streetName: 'sosnowa 3a',
    postalCode: '12-345',
    phoneNumber: '530079391',
    email: 'michalos1@poczta.onet.pl',
  },
  {
    id: '2',
    role: RoleType.CLIENT,
    username: 'mikad132',
    streetName: 'sosnowa 3a',
    postalCode: '12-345',
    phoneNumber: '530079391',
    email: 'michalos1@poczta.onet.pl',
  },
  {
    id: '3',
    role: RoleType.ADMIN,
    username: 'mikad132',
    streetName: 'sosnowa 3a',
    postalCode: '12-345',
    phoneNumber: '530079391',
    email: 'michalos1@poczta.onet.pl',
  },
];

const HistoryPageContainer = () => {
  console.log('JDJ');

  return (
    <div style={{ color: '#000' }}>
      <LoggedUserInfoComponent />
      <HistoryPageHeaderComponent />
      <HistoryTable histories={MOCKED_HISTORIES} />
    </div>
  );
};

export default HistoryPageContainer;
