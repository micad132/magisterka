import { ChartData } from 'chart.js';
import { TaskStatus } from '../types/TaskType.ts';

export const roleMessageCountDoughnout = (data: number[]): ChartData<'doughnut'> => ({
  labels: ['KLIENT', 'PRACOWNIK'],
  datasets: [
    {
      label: 'Ilość',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const roleMessagesWithTimeLine = (labels: string[], clientValues: number[], workerValues: number[]): ChartData<'line'> => ({
  labels,
  datasets: [
    {
      label: 'Wiadomości klienta',
      data: clientValues,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Wiadomości pracownika',
      data: workerValues,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
});
