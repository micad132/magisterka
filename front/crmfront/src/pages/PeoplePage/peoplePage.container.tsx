import styled from 'styled-components';
import { Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import SinglePersonComponent from './components/singlePerson/singlePerson.component.tsx';
import PeopleWrapperComponent from './components/peopleWrapper.component.tsx';
import { RoleType } from '../../types/UserType.ts';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers } from '../../store/userSlice.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';

const HistoryPageWrapper = styled.div`
    color: var(--font-color);
`;

const PeoplePageContainer = () => {
  const [isOnlyClients, setIsOnlyClients] = useState<boolean>(false);
  const allUsers = useAppSelector(getAllUsers);

  console.log('ALL USERS', allUsers);

  const clientUsers = allUsers?.filter((client) => client.userRole === RoleType.CLIENT);

  const properUsers = isOnlyClients
    ? clientUsers
    : allUsers;

  const singlePersonComponents = properUsers.map((user) => <SinglePersonComponent key={user.username} user={user} />);

  return (
    <HistoryPageWrapper>
      <PageHeaderComponent text="People" />
      <h3>Total amount of users in system: {allUsers.length}</h3>
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
