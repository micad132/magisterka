import styled from 'styled-components';
import SingleStatComponent from './singleStat.component.tsx';
import { WorkerProfileCount } from '../../../../types/UserType.ts';

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
`;

interface Props {
  count: WorkerProfileCount,
}

const WorkerStatsWrapperComponent = ({ count }: Props) => (
  <StatsWrapper>
    <SingleStatComponent count={count.messagesCount} text="Wiadomości" />
    <SingleStatComponent count={count.tasksMadeCount} text="Stworzone Usługi" />
    <SingleStatComponent count={count.taskAssigneeCount} text="Przypisane Usługi" />
    <SingleStatComponent count={count.commentsCount} text="Komentarze" />
    <SingleStatComponent count={count.historiesCount} text="Historia akcji" />
  </StatsWrapper>
);

export default WorkerStatsWrapperComponent;
