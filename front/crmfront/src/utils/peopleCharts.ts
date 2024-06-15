import { ChartData } from 'chart.js';
import { SupportRequest } from '../types/SupportRequest.ts';
import { RoleType, UserGender } from '../types/UserType.ts';

export const clientByGenderPie = (data: number[]): ChartData<'pie'> => ({
  labels: [UserGender.MAN, UserGender.WOMAN],
  datasets: [
    {
      label: 'Count',
      data,
      backgroundColor: [
        'rgb(14,59,211)',
        'rgb(202,79,216)',
      ],
      borderColor: [
        'rgb(14,59,211)',
        'rgb(202,79,216)',
      ],
      borderWidth: 1,
    },
  ],
});

export const usersByRoleDoughnut = (data: number[]): ChartData<'doughnut'> => ({
  labels: [RoleType.CLIENT, RoleType.WORKER, RoleType.ADMIN],
  datasets: [
    {
      label: 'Count',
      data,
      backgroundColor: [
        'rgb(113,9,220)',
        'rgb(49,216,162)',
        'rgb(225,113,32)',
      ],
      borderColor: [
        'rgb(113,9,220)',
        'rgb(49,216,162)',
        'rgb(225,113,32)',
      ],
      borderWidth: 1,
    },
  ],
});

export const clientsByProvince = (labels: string[], values: number[]): ChartData<'bar'> => ({
  labels,
  datasets: [
    {
      label: 'Amount of clients',
      data: values,
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
});
