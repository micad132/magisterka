import styled from 'styled-components';
import { useState } from 'react';
import SinglePersonComponent from './components/singlePerson/singlePerson.component.tsx';
import PeopleWrapperComponent from './components/peopleWrapper.component.tsx';
import { RoleType } from '../../types/UserType.ts';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers } from '../../store/userSlice.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import SelectComponent from '../../components/form/select.component.tsx';
import { PROVINCES_VALUES, USER_ROLES_OPTIONS } from '../../utils/consts.ts';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';

const SelectWrapper = styled.div`
  max-width: 400px;
  margin: 10px auto;
`;

const PeoplePageContainer = () => {
  const [filteredUser, setFilteredUser] = useState<string>('ALL');
  const [countryFilter, setCountryFilter] = useState<string>('ALL');
  const allUsers = useAppSelector(getAllUsers);

  const provinceSelectValues: SelectValue[] = [...PROVINCES_VALUES, { text: 'wszyscy', value: 'all' }];

  const clientUsers = allUsers?.filter((client) => client.userRole === RoleType.CLIENT);

  const properUsers = filteredUser === 'ALL'
    ? allUsers
    : allUsers.filter((user) => user.userRole === filteredUser);

  const properUsersAfterCountryFilter = countryFilter === 'ALL'
    ? properUsers
    : properUsers.filter((user) => user.provinceName === countryFilter);

  const singlePersonComponents = properUsersAfterCountryFilter.map((user) => <SinglePersonComponent key={user.username} user={user} />);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Użytkownicy" />
      <h3>Ilość wszystkich użytkowników w systemie: {allUsers.length}</h3>
      <h3>Ilość klientów w systemie: {clientUsers.length}</h3>
      <SelectWrapper>
        <SelectComponent
          options={USER_ROLES_OPTIONS}
          onChange={setFilteredUser}
          label="Wyświetl jedynie użytkowników z rolą"
          value={filteredUser}
        />
      </SelectWrapper>
      <SelectWrapper>
        <SelectComponent
          options={provinceSelectValues}
          onChange={setCountryFilter}
          label="Wyświetl jedynie użytkowników z województwa"
          value={countryFilter}
        />
      </SelectWrapper>

      <PeopleWrapperComponent>
        {singlePersonComponents}
      </PeopleWrapperComponent>

    </PageWrapperComponent>
  );
};

export default PeoplePageContainer;
