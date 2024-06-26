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
    <SingleStatComponent count={count.messagesCount} text="Wiadomości" />
    <SingleStatComponent count={count.tasksMadeCount} text="Usługi" />
    <SingleStatComponent count={count.supportsCount} text="Zgłoszenia wsparcia" />
    <SingleStatComponent count={count.commentsCount} text="Komentarze" />
    <SingleStatComponent count={count.historiesCount} text="Historia akcji" />
    <SingleStatComponent count={count.surveysCount} text="Ankiety" />
  </StatsWrapper>
);

export default StatsWrapperComponent;
