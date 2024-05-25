import styled from 'styled-components';
import { Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import SinglePersonComponent from './components/singlePerson/singlePerson.component.tsx';
import PeopleWrapperComponent from './components/peopleWrapper.component.tsx';
import { RoleType } from '../../types/UserType.ts';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers } from '../../store/userSlice.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import SelectComponent from '../../components/form/select.component.tsx';
import { USER_ROLES_OPTIONS } from '../../utils/consts.ts';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';

const HistoryPageWrapper = styled.div`
    color: var(--font-color);
`;

const SelectWrapper = styled.div`
  max-width: 400px;
  margin: 10px auto;
`;

const PeoplePageContainer = () => {
  const [filteredUser, setFilteredUser] = useState<string>('all');
  const allUsers = useAppSelector(getAllUsers);

  console.log('ALL USERS', allUsers);
  console.log('filtered', filteredUser);

  const clientUsers = allUsers?.filter((client) => client.userRole === RoleType.CLIENT);

  const properUsers = filteredUser === 'all'
    ? allUsers
    : allUsers.filter((user) => user.userRole === filteredUser);

  const singlePersonComponents = properUsers.map((user) => <SinglePersonComponent key={user.username} user={user} />);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="People" />
      <h3>Total amount of users in system: {allUsers.length}</h3>
      <h3>Total amount of clients in system: {clientUsers.length}</h3>
      <SelectWrapper>
        <SelectComponent
          options={USER_ROLES_OPTIONS}
          onChange={setFilteredUser}
          label="Select only people with role"
          value={filteredUser}
        />
      </SelectWrapper>

      <PeopleWrapperComponent>
        {singlePersonComponents}
      </PeopleWrapperComponent>

    </PageWrapperComponent>
  );
};

export default PeoplePageContainer;
