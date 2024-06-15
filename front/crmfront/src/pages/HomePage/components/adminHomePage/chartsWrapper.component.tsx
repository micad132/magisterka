import styled from 'styled-components';
import { StatResponse } from '../../../../types/StatType.ts';
import PieChartComponent from '../../../../components/diagrams/pieChart.component.tsx';
import { mapDateToString } from '../../../../utils/mappers/mapDateToString.ts';
import { getProperJsonMap, mapJsonToPieChart } from '../../../../utils/mappers/chartUtils/mapJsonToChart.ts';

const Wrapper = styled.div`
  margin-top: 20px;
  border: 2px solid teal;
  padding-top: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  width: 45%;

  &::-webkit-scrollbar {
    background: teal;
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(101, 188, 188, 0.99);
  }

  &::-webkit-scrollbar-thumb {
    background: teal;
    border-radius: 10px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: darkcyan;
  }
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ChartsWrapper = styled.div`
  display: flex;
`;

interface Props {
  spanText: string,
  stats: StatResponse[],
}

const ChartsWrapperComponent = ({ spanText, stats }: Props) => {
  const mappedCharts = stats.map((s) => (
    <PieChartComponent isStatPage={false} key={s.id} id={s.id} description={s.description} chartData={getProperJsonMap(s.statType, s.chartData)} creatorUsername={s.creatorUsername} createdTime={mapDateToString(s.createdTime)} chartType={s.statType} />
  ));
  return (
    <Wrapper>
      <Title>{spanText} ({stats.length})</Title>
      <ChartsWrapper>
        {mappedCharts}
      </ChartsWrapper>
    </Wrapper>
  );
};

export default ChartsWrapperComponent;
