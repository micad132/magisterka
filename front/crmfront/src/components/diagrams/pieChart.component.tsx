import { ChartData, ChartType } from 'chart.js';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import RoleTagComponent from '../roleTag.component.tsx';
import { RoleType } from '../../types/UserType.ts';
import { StatType, StatTypeType } from '../../types/StatType.ts';

interface Props {
  chartData: ChartData<'pie' | 'doughnut' | 'line'>,
  creatorUsername: string,
  createdTime: string,
  chartType: StatTypeType,
}

const PieChartWrapper = styled.div`
  width: 400px;
  height: 400px;
`;

const RoleTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PieChartComponent = ({
  chartData, createdTime, creatorUsername, chartType,
}: Props) => {
  const getProperChart = (chartTypee: StatTypeType) => {
    switch (chartTypee) {
      case StatType.PIE:
        return <Pie data={chartData as ChartData<'pie'>} />;
      case StatType.DOUGHNUT:
        return <Doughnut data={chartData as ChartData<'doughnut'>} />;
      case StatType.LINE:
        return <Line data={chartData as ChartData<'line'>} />;
    }
  };

  return (

    <PieChartWrapper>
      <p>Created: {createdTime}</p>
      <RoleTag>By: {creatorUsername} <RoleTagComponent role={RoleType.ADMIN} /></RoleTag>
      {getProperChart(chartType)}
    </PieChartWrapper>
  );
};
export default PieChartComponent;
