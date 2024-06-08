import styled from 'styled-components';
import { useAppSelector } from '../../../../../../utils/hooks.ts';
import { getAllStats } from '../../../../../../store/statSlice.tsx';
import CountDivComponent from './countDiv.component.tsx';
import CountDivContentComponent from './countDivContent.component.tsx';
import StatCategoryTagComponent from '../../../../../../components/statCategoryTag.component.tsx';
import { StatCategory, StatType } from '../../../../../../types/StatType.ts';
import StatTypeTagComponent from '../../../../../../components/statTypeTag.component.tsx';

const Wrapper = styled.div`
  font-size: 1.3rem;
  display: flex;
  max-width: 1200px;
  justify-content: space-evenly;
  margin: 20px auto;
`;

const Count = styled.span`
  font-weight: bold;
`;

const StatCountWrapperComponent = () => {
  const stats = useAppSelector(getAllStats);

  // category stats
  const taskStats = stats.filter((stat) => stat.statCategory === StatCategory.TASK);
  const peopleStats = stats.filter((stat) => stat.statCategory === StatCategory.PEOPLE);
  const messageStats = stats.filter((stat) => stat.statCategory === StatCategory.MESSAGE);
  const supportStats = stats.filter((stat) => stat.statCategory === StatCategory.SUPPORT);

  // chart type stats
  const barStats = stats.filter((stat) => stat.statType === StatType.BAR);
  const pieStats = stats.filter((stat) => stat.statType === StatType.PIE);
  const lineStats = stats.filter((stat) => stat.statType === StatType.LINE);
  const doughnutStats = stats.filter((stat) => stat.statType === StatType.DOUGHNUT);

  return (
    <Wrapper>
      <div>
        <p>Stats by category:</p>
        <CountDivComponent>
          <CountDivContentComponent>
            <StatCategoryTagComponent statCategory={StatCategory.TASK} />
            <Count>{taskStats.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <StatCategoryTagComponent statCategory={StatCategory.PEOPLE} />
            <Count>{peopleStats.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <StatCategoryTagComponent statCategory={StatCategory.MESSAGE} />
            <Count>{messageStats.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <StatCategoryTagComponent statCategory={StatCategory.SUPPORT} />
            <Count>{supportStats.length}</Count>
          </CountDivContentComponent>
        </CountDivComponent>
      </div>
      <div>
        <p>Stats by chart type:</p>
        <CountDivComponent>
          <CountDivContentComponent>
            <StatTypeTagComponent statType={StatType.BAR} />
            <Count>{barStats.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <StatTypeTagComponent statType={StatType.PIE} />
            <Count>{pieStats.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <StatTypeTagComponent statType={StatType.LINE} />
            <Count>{lineStats.length}</Count>
          </CountDivContentComponent>
          <CountDivContentComponent>
            <StatTypeTagComponent statType={StatType.DOUGHNUT} />
            <Count>{doughnutStats.length}</Count>
          </CountDivContentComponent>

        </CountDivComponent>
      </div>
    </Wrapper>
  );
};

export default StatCountWrapperComponent;
