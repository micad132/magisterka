import styled from 'styled-components';
import { Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import PeoplePageHeaderComponent from '../HistoryPage/components/historyPageHeader.component.tsx';
import LoggedUserInfoComponent from '../HistoryPage/components/loggedUserInfo.component.tsx';
import SinglePersonComponent from './components/singlePerson/singlePerson.component.tsx';
import PeopleWrapperComponent from './components/peopleWrapper.component.tsx';
import { MockedUsers } from '../../mock/mockUsers.tsx';
import { RoleType } from '../../types/UserType.ts';

const HistoryPageWrapper = styled.div`
    color: var(--font-color);
`;

const PeoplePageContainer = () => {
  console.log('fds');
  const [isOnlyClients, setIsOnlyClients] = useState<boolean>(false);

  const clientUsers = MockedUsers.filter((client) => client.role === RoleType.CLIENT);

  const properUsers = isOnlyClients
    ? clientUsers
    : MockedUsers;

  const singlePersonComponents = properUsers.map((user) => <SinglePersonComponent key={user.username} user={user} />);

  return (
    <HistoryPageWrapper>
      <h3>Total amount of users in system: {MockedUsers.length}</h3>
      <h3>Total amount of clients in system: {clientUsers.length}</h3>
      <Checkbox colorScheme="blue" onChange={(e) => setIsOnlyClients(e.target.checked)}>
        Show only clients
      </Checkbox>
      <PeopleWrapperComponent>
        {singlePersonComponents}
      </PeopleWrapperComponent>

    </HistoryPageWrapper>
  );
};

export default PeoplePageContainer;
