import { SelectValue } from '../types/UtilTypes.ts';

export const API_URL = 'http://localhost:8080/api/v1';

export const TASK_STATUS_OPTIONS: SelectValue[] = [
  {
    text: 'In progress',
    value: 'inprogress',
  },
  {
    text: 'Pending',
    value: 'pending',
  },
  {
    text: 'Done',
    value: 'done',
  },
  {
    text: 'Canceled',
    value: 'canceled',
  },
];

export const TASK_PRIORITY_OPTIONS: SelectValue[] = [
  {
    text: 'Minor',
    value: 'minor',
  },
  {
    text: 'Major',
    value: 'major',
  },
  {
    text: 'Critical',
    value: 'critical',
  },
];

export const TASK_TYPE_OPTIONS: SelectValue[] = [
  {
    text: 'Logistic',
    value: 'logistic',
  },
  {
    text: 'Purchase',
    value: 'purchase',
  },
  {
    text: 'Informatic',
    value: 'informatic',
  },
];
