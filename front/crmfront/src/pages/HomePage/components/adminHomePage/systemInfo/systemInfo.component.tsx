import styled from 'styled-components';
import SystemSingleInfoComponent from '../systemSingleInfo.component.tsx';
import LabelTextComponent from './labelText.component.tsx';

const SingleInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SystemInfoComponent = () => {
  const a = 3;
  return (
    <div>
      <LabelTextComponent text="Total system count" />
      <SingleInfoWrapper>
        <SystemSingleInfoComponent count={127} text="People" linkUrl="/people" />
        <SystemSingleInfoComponent count={127} text="Tasks" linkUrl="/tasks" />
        <SystemSingleInfoComponent count={127} text="Messages" linkUrl="/messages" />
        <SystemSingleInfoComponent count={127} text="History" linkUrl="/history" />
        <SystemSingleInfoComponent count={127} text="Charts" linkUrl="/stats" />
        <SystemSingleInfoComponent count={127} text="Support" linkUrl="/support" />
        <SystemSingleInfoComponent count={127} text="Surveys" linkUrl="/survey" />
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
      </SingleInfoWrapper>
    </div>
  );
};

export default SystemInfoComponent;
