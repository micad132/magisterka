import styled from 'styled-components';
import SingleStatComponent from './singleStat.component.tsx';

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
`;

const StatsWrapperComponent = () => {
  const a = 3;
  return (
    <StatsWrapper>
      <SingleStatComponent count={7} text="Messages" />
      <SingleStatComponent count={4} text="Tasks made" />
      <SingleStatComponent count={2} text="Support requests" />
      <SingleStatComponent count={1} text="Comments" />
      <SingleStatComponent count={2} text="Profile changes" />
    </StatsWrapper>
  );
};

export default StatsWrapperComponent;
