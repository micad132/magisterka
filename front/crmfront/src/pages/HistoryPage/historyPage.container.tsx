import HistoryTable from './components/historyTable.component.tsx';
import LoggedUserInfoComponent from './components/loggedUserInfo.component.tsx';
import HistoryPageHeaderComponent from './components/historyPageHeader.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getUserDetails } from '../../store/userSlice.tsx';
import { getAllHistories } from '../../store/historySlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';

const HistoryPageContainer = () => {
  const loggedUser = useAppSelector(getUserDetails);
  const histories = useAppSelector(getAllHistories);

  const clientHistories = histories.filter((history) => history.performerUsername === loggedUser.username);
  console.log('HISTORIES', histories);

  if (loggedUser.userRole === RoleType.CLIENT || loggedUser.userRole === RoleType.WORKER) {
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

  if (loggedUser.userRole === RoleType.ADMIN) {
    return (
      <PageWrapperComponent>
        <PageHeaderComponent text="History of actions" />
        <LoggedUserInfoComponent name={loggedUser.name} role={loggedUser.userRole} surname={loggedUser.surname} />
        <HistoryPageHeaderComponent
          text={`There are ${histories.length} actions in the system`}
        />
        <HistoryTable histories={histories} />
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
