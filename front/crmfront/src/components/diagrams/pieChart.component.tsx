import { ChartData, ChartOptions, ChartType } from 'chart.js';
import {
  Bar, Doughnut, Line, Pie,
} from 'react-chartjs-2';
import styled from 'styled-components';
import { DeleteIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import RoleTagComponent from '../roleTag.component.tsx';
import { RoleType } from '../../types/UserType.ts';
import { StatType, StatTypeType } from '../../types/StatType.ts';
import { ModalProps } from '../../types/UtilTypes.ts';
import { useAppDispatch } from '../../utils/hooks.ts';
import { deleteStatThunk } from '../../store/statSlice.tsx';
import ModalComponent from '../modals/modal.component.tsx';

interface Props {
  description: string,
  chartData: ChartData<'pie' | 'doughnut' | 'line' | 'bar'>,
  creatorUsername: string,
  createdTime: string,
  chartType: StatTypeType,
  id: number,
  isStatPage: boolean,
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
  chartData, createdTime, creatorUsername, chartType, description, id, isStatPage,
}: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
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

  const deleteHandler = async () => {
    try {
      await dispatch(deleteStatThunk(id));
      toast({
        title: 'Wykres usunięty!',
        description: 'Pomyślnie usunięto wykres!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Wykres nie został usunięty!',
        description: 'Nie udało się usunąć wykresu!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const modalProps: ModalProps = {
    modalIcon: <DeleteIcon color="red.500" boxSize={6} />,
    modalActionButtonText: 'Usuń',
    modalHeader: 'Usuń wykres',
    modalBody: <h1>Czy na pewno chcesz usunąć ten wykres?</h1>,
    mainButtonAction: deleteHandler,
    buttonText: 'Usuń',
  };

  return (

    <PieChartWrapper>
      {isStatPage && <ModalComponent modalProps={modalProps} />}
      <p>{description}</p>
      <p>Utworzony: {createdTime}</p>
      <RoleTag>Przez: {creatorUsername} <RoleTagComponent role={RoleType.ADMIN} /></RoleTag>
      {getProperChart(chartType)}
    </PieChartWrapper>
  );
};
export default PieChartComponent;
