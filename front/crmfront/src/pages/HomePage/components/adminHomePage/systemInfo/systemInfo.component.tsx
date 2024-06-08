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

const SingleInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

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
      <LabelTextComponent text="Total system count" />
      <SingleInfoWrapper>
        <SystemSingleInfoComponent count={users.length} text="People" linkUrl="/people" />
        <SystemSingleInfoComponent count={tasks.length} text="Tasks" linkUrl="/tasks" />
        <SystemSingleInfoComponent count={messages.length} text="Messages" linkUrl="/messages" />
        <SystemSingleInfoComponent count={histories.length} text="History" linkUrl="/history" />
        <SystemSingleInfoComponent count={stats.length} text="Charts" linkUrl="/stats" />
        <SystemSingleInfoComponent count={supports.length} text="Support" linkUrl="/support" />
        <SystemSingleInfoComponent count={surveys.length} text="Surveys" linkUrl="/survey" />
        <SystemSingleInfoComponent count={comments.length} text="Comments" linkUrl="/comments" />
      </SingleInfoWrapper>

      <LabelTextComponent text="This month" />
      <SingleInfoWrapper>
        <SystemSingleInfoComponent count={127} text="People" linkUrl="/people" />
        <SystemSingleInfoComponent count={127} text="Tasks" linkUrl="/tasks" />
        <SystemSingleInfoComponent count={127} text="Messages" linkUrl="/messages" />
        <SystemSingleInfoComponent count={127} text="History" linkUrl="/history" />
        <SystemSingleInfoComponent count={127} text="Charts" linkUrl="/stats" />
        <SystemSingleInfoComponent count={127} text="Support" linkUrl="/support" />
        <SystemSingleInfoComponent count={127} text="Surveys" linkUrl="/survey" />
        <SystemSingleInfoComponent count={127} text="Comments" linkUrl="/comments" />
      </SingleInfoWrapper>
      <LabelTextComponent text="This week" />
      <SingleInfoWrapper>
        <SystemSingleInfoComponent count={127} text="People" linkUrl="/people" />
        <SystemSingleInfoComponent count={127} text="Tasks" linkUrl="/tasks" />
        <SystemSingleInfoComponent count={127} text="Messages" linkUrl="/messages" />
        <SystemSingleInfoComponent count={127} text="History" linkUrl="/history" />
        <SystemSingleInfoComponent count={127} text="Charts" linkUrl="/stats" />
        <SystemSingleInfoComponent count={127} text="Support" linkUrl="/support" />
        <SystemSingleInfoComponent count={127} text="Surveys" linkUrl="/survey" />
        <SystemSingleInfoComponent count={127} text="Comments" linkUrl="/comments" />
      </SingleInfoWrapper>
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
