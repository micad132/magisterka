import { ChartData } from 'chart.js';
import { TaskPriority, TaskStatus, TaskType } from '../types/TaskType.ts';

export const taskStatusPieChart = (data: number[]): ChartData<'pie'> => ({
  labels: [TaskStatus.IN_PROGRESS, TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.CANCELED],
  datasets: [
    {
      label: 'Status',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const taskPriorityPieChart = (data: number[]): ChartData<'pie'> => ({
  labels: [TaskPriority.MINOR, TaskPriority.MAJOR, TaskPriority.CRITICAL],
  datasets: [
    {
      label: 'Priority',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const taskTypePieChart = (data: number[]): ChartData<'pie'> => ({
  labels: [TaskType.LOGISTIC, TaskType.PURCHASE, TaskType.INFORMATIC],
  datasets: [
    {
      label: 'Type',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const taskByUserPieChart = (data: number[]): ChartData<'pie'> => ({
  labels: [TaskType.LOGISTIC, TaskType.PURCHASE, TaskType.INFORMATIC],
  datasets: [
    {
      label: 'Amount created by',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
});
