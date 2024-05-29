import HistoryTable from './components/historyTable.component.tsx';
import LoggedUserInfoComponent from './components/loggedUserInfo.component.tsx';
import HistoryPageHeaderComponent from './components/historyPageHeader.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getUserDetails } from '../../store/userSlice.tsx';
import { getAllHistories } from '../../store/historySlice.tsx';

const HistoryPageContainer = () => {
  const loggedUser = useAppSelector(getUserDetails);
  const histories = useAppSelector(getAllHistories);
  console.log('HISTORIES', histories);
  return (
    <div style={{ color: '#000' }}>
      <LoggedUserInfoComponent name={loggedUser.name} role={loggedUser.userRole} surname={loggedUser.surname} />
      <HistoryPageHeaderComponent />
      <HistoryTable histories={histories} />
    </div>
  );
};

export default HistoryPageContainer;
