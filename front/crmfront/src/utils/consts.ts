import { SelectValue } from '../types/UtilTypes.ts';
import { SupportRequest } from '../types/SupportRequest.ts';
import { RoleType } from '../types/UserType.ts';
import { TaskPriority, TaskStatus, TaskType } from '../types/TaskType.ts';

export const API_URL = 'http://localhost:8080/api/v1';

export const TASK_STATUS_OPTIONS: SelectValue[] = [
  {
    text: 'In progress',
    value: TaskStatus.IN_PROGRESS,
  },
  {
    text: 'Pending',
    value: TaskStatus.PENDING,
  },
  {
    text: 'Done',
    value: TaskStatus.DONE,
  },
  {
    text: 'Canceled',
    value: TaskStatus.CANCELED,
  },
];

export const TASK_PRIORITY_OPTIONS: SelectValue[] = [
  {
    text: 'Minor',
    value: TaskPriority.MINOR,
  },
  {
    text: 'Major',
    value: TaskPriority.MAJOR,
  },
  {
    text: 'Critical',
    value: TaskPriority.CRITICAL,
  },
];

export const USER_ROLES_OPTIONS: SelectValue[] = [
  {
    text: 'ALL',
    value: 'ALL',
  },
  {
    text: 'CLIENT',
    value: RoleType.CLIENT,
  },
  {
    text: 'WORKER',
    value: RoleType.WORKER,
  },
  {
    text: 'ADMIN',
    value: RoleType.ADMIN,
  },
];

export const TASK_TYPE_OPTIONS: SelectValue[] = [
  {
    text: 'Logistic',
    value: TaskType.LOGISTIC,
  },
  {
    text: 'Purchase',
    value: TaskType.PURCHASE,
  },
  {
    text: 'Informatic',
    value: TaskType.INFORMATIC,
  },
];

export const GENDER_SELECT_OPTIONS: SelectValue[] = [
  {
    text: 'Man',
    value: 'MAN',
  },
  {
    text: 'Woman',
    value: 'WOMAN',
  },
];

export const SUPPORT_REQUEST_SELECT_OPTIONS: SelectValue[] = [
  {
    text: SupportRequest.SUPPORT,
    value: 'support',
  },
  {
    text: SupportRequest.BUG,
    value: 'bug',
  },
  {
    text: SupportRequest.OTHER,
    value: 'other',
  },
  {
    text: SupportRequest.IMPROVEMENT,
    value: 'other',
  },
];

export type AllSelectValue = {
  initialStasuses: SelectValue[],
  taskPriority: SelectValue[],
  taskType: SelectValue[],
};
