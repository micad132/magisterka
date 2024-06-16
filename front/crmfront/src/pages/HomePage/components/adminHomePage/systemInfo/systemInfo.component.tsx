// @ts-nocheck
import styled from 'styled-components';
import SystemSingleInfoComponent from '../systemSingleInfo.component.tsx';
import LabelTextComponent from './labelText.component.tsx';
import TaskCountWrapperComponent from './count/taskCountWrapper.component.tsx';
import PeopleCountWrapperComponent from './count/peopleCountWrapper.component.tsx';
import MessageCountWrapperComponent from './count/messageCountWrapper.component.tsx';
import HistoryCountWrapperComponent from './count/historyCountWrapper.component.tsx';
import StatCountWrapperComponent from './count/statCountWrapper.component.tsx';
import SurveyCountWrapperComponent from './count/surveyCountWrapper.component.tsx';
import { useAppSelector } from '../../../../../utils/hooks.ts';
import { getAllUsers } from '../../../../../store/userSlice.tsx';
import { getAllTasks } from '../../../../../store/taskSlice.tsx';
import { getAllMessages } from '../../../../../store/messageSlice.tsx';
import { getAllStats } from '../../../../../store/statSlice.tsx';
import { getAllHistories } from '../../../../../store/historySlice.tsx';
import { getAllSupportRequests } from '../../../../../store/supportRequestSlice.tsx';
import { getAllSurveys } from '../../../../../store/surveySlice.tsx';
import { getAllComments } from '../../../../../store/commentsSlice.tsx';
import { filterMessagesByCurrentWeek, filterSurveysByCurrentWeek } from '../../../../../utils/utilFunctions.ts';
import SingleInfoWrapperComponent from '../../singleInfoWrapper.component.tsx';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto;
`;

const SystemInfoComponent = () => {
  const a = 3;
  const users = useAppSelector(getAllUsers);
  const tasks = useAppSelector(getAllTasks);
  const messages = useAppSelector(getAllMessages);
  const stats = useAppSelector(getAllStats);
  const histories = useAppSelector(getAllHistories);
  const supports = useAppSelector(getAllSupportRequests);
  const surveys = useAppSelector(getAllSurveys);
  const comments = useAppSelector(getAllComments);

  return (
    <div>
      <LabelTextComponent text="Dane w systemie" />
      <SingleInfoWrapperComponent>
        <SystemSingleInfoComponent count={users.length} text="Użytkownicy" />
        <SystemSingleInfoComponent count={tasks.length} text="Usługi" />
        <SystemSingleInfoComponent count={messages.length} text="Wiadomości" />
        <SystemSingleInfoComponent count={histories.length} text="Historia" />
        <SystemSingleInfoComponent count={stats.length} text="Wykresy" />
        <SystemSingleInfoComponent count={supports.length} text="Wsparcie" />
        <SystemSingleInfoComponent count={surveys.length} text="Ankiety" />
        <SystemSingleInfoComponent count={comments.length} text="Komentarze" />
      </SingleInfoWrapperComponent>
      <TaskCountWrapperComponent />
      <FlexContainer>
        <PeopleCountWrapperComponent />
        <MessageCountWrapperComponent />
        <SurveyCountWrapperComponent />
      </FlexContainer>

      <HistoryCountWrapperComponent />
      <StatCountWrapperComponent />
    </div>
  );
};

export default SystemInfoComponent;
