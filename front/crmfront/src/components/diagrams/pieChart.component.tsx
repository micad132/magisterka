import { ChartData, ChartOptions, ChartType } from 'chart.js';
import {
  Bar, Doughnut, Line, Pie,
} from 'react-chartjs-2';
import styled from 'styled-components';
import RoleTagComponent from '../roleTag.component.tsx';
import { RoleType } from '../../types/UserType.ts';
import { StatType, StatTypeType } from '../../types/StatType.ts';

interface Props {
  description: string,
  chartData: ChartData<'pie' | 'doughnut' | 'line' | 'bar'>,
  creatorUsername: string,
  createdTime: string,
  chartType: StatTypeType,
}

const PieChartWrapper = styled.div`
  width: 300px;
  height: min-content;
  padding: 20px 0;
`;

const RoleTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chart = styled.div`
  height: 350px;
`;

const BAR_OPTIONS: ChartOptions<'bar'> = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        callback(value) {
          if (Number.isInteger(value)) {
            return value;
          }
          return null;
        },
      },
    },
  },
};

const PieChartComponent = ({
  chartData, createdTime, creatorUsername, chartType, description,
}: Props) => {
  const getProperChart = (chartTypee: StatTypeType) => {
    switch (chartTypee) {
      case StatType.PIE:
        return (
          <Chart>
            <Pie data={chartData as ChartData<'pie'>} />
          </Chart>
        );

      case StatType.DOUGHNUT:
        return (
          <Chart>
            <Doughnut data={chartData as ChartData<'doughnut'>} />
          </Chart>
        );
      case StatType.LINE:
        return (
          <Chart>
            <Line data={chartData as ChartData<'line'>} />
          </Chart>
        );
      case StatType.BAR:
        return <Bar data={chartData as ChartData<'bar'>} options={BAR_OPTIONS} />;
    }
  };

  return (

    <PieChartWrapper>
      <p>{description}</p>
      <p>Created: {createdTime}</p>
      <RoleTag>By: {creatorUsername} <RoleTagComponent role={RoleType.ADMIN} /></RoleTag>
      {getProperChart(chartType)}
    </PieChartWrapper>
  );
};
export default PieChartComponent;
