import { ChartData } from 'chart.js';
import { SupportRequest } from '../types/SupportRequest.ts';

export const supportRequestCategoriesPie = (data: number[]): ChartData<'doughnut'> => ({
  labels: ['Pomysł', 'Wsparcie', 'Problem', 'Inny'],
  datasets: [
    {
      label: 'Count',
      data,
      backgroundColor: [
        'rgba(62,193,84, 1)',
        'rgba(75,98,192, 1)',
        'rgba(202,79,216,1)',
        'rgba(208,220,45, 1)',
      ],
      borderColor: [
        'rgba(62,193,84, 1)',
        'rgba(75,98,192, 1)',
        'rgba(202,79,216,1)',
        'rgba(208,220,45, 1)',
      ],
      borderWidth: 1,
    },
  ],
});
