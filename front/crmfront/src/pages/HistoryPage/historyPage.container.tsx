import HistoryTable from './components/historyTable.component.tsx';
import LoggedUserInfoComponent from './components/loggedUserInfo.component.tsx';
import HistoryPageHeaderComponent from './components/historyPageHeader.component.tsx';
import { MOCKED_HISTORIES } from '../../mock/mockHistory.tsx';

const HistoryPageContainer = () => (
  <div style={{ color: '#000' }}>
    <LoggedUserInfoComponent />
    <HistoryPageHeaderComponent />
    <HistoryTable histories={MOCKED_HISTORIES} />
  </div>
);

export default HistoryPageContainer;
