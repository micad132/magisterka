import styled from 'styled-components';
import SingleStatComponent from './singleStat.component.tsx';
import { ProfileCount } from '../../../../types/UserType.ts';

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
`;

interface Props {
  count: ProfileCount,
}

const StatsWrapperComponent = ({ count }: Props) => (
  <StatsWrapper>
    <SingleStatComponent count={count.messagesCount} text="Messages" />
    <SingleStatComponent count={count.tasksMadeCount} text="Tasks made" />
    <SingleStatComponent count={count.supportsCount} text="Support requests" />
    <SingleStatComponent count={count.commentsCount} text="Comments" />
    <SingleStatComponent count={count.historiesCount} text="Histories" />
    <SingleStatComponent count={count.surveysCount} text="Surveys made" />
  </StatsWrapper>
);

export default StatsWrapperComponent;
