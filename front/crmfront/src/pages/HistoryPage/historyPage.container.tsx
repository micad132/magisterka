import { useState } from 'react';
import styled from 'styled-components';
import HistoryTable from './components/historyTable.component.tsx';
import LoggedUserInfoComponent from './components/loggedUserInfo.component.tsx';
import HistoryPageHeaderComponent from './components/historyPageHeader.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers, getUserDetails } from '../../store/userSlice.tsx';
import { getAllHistories } from '../../store/historySlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';
import SelectComponent from '../../components/form/select.component.tsx';

const SelectWrapper = styled.div`
  width: max-content;
  margin: 20px auto;
`;

const HistoryPageContainer = () => {
  const loggedUser = useAppSelector(getUserDetails);
  const histories = useAppSelector(getAllHistories);
  const [selectedUserHistories, setSelectedUserHistories] = useState<string>('ALL');

  const users = useAppSelector(getAllUsers);

  const selectValues: SelectValue[] = users.map((user) => ({
    value: user.username,
    text: `${user.username} - ${user.name} ${user.surname}`,
  }));

  selectValues.push({
    text: 'ALL',
    value: 'ALL',
  });

  const clientHistories = histories?.filter((history) => history.performerUsername === loggedUser.username);

  if (loggedUser.userRole === RoleType.CLIENT) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="History of actions" />
        <LoggedUserInfoComponent name={loggedUser.name} role={loggedUser.userRole} surname={loggedUser.surname} />
        <HistoryPageHeaderComponent
          text={`You performed ${clientHistories.length} actions`}
        />
        <HistoryTable histories={clientHistories} />
      </PageWrapperComponent>
    );
  }

  const filteredHistories = selectedUserHistories === 'ALL'
    ? histories
    : histories.filter((history) => history.performerUsername === selectedUserHistories);

  if (loggedUser.userRole === RoleType.ADMIN || loggedUser.userRole === RoleType.WORKER) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="History of actions" />
        <LoggedUserInfoComponent name={loggedUser.name} role={loggedUser.userRole} surname={loggedUser.surname} />
        <HistoryPageHeaderComponent
          text={`There are ${histories.length} actions in the system`}
        />
        <SelectWrapper>
          <SelectComponent
            options={selectValues}
            onChange={setSelectedUserHistories}
            label="Select user history"
            value={selectedUserHistories}
          />
        </SelectWrapper>

        <HistoryTable histories={filteredHistories} />
      </PageWrapperComponent>
    );
  }

  // if (loggedUser.userRole === RoleType.WORKER) {
  //   return (
  //     <PageWrapperComponent>
  //       <PageHeaderComponent text="History of actions" />
  //       <LoggedUserInfoComponent name={loggedUser.name} role={loggedUser.userRole} surname={loggedUser.surname} />
  //       <HistoryPageHeaderComponent
  //         text={`You performed ${clientHistories.length} actions`}
  //       />
  //       <HistoryTable histories={clientHistories} />
  //     </PageWrapperComponent>
  //   );
  // }
};

export default HistoryPageContainer;
