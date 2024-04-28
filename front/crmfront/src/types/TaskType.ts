import { ValuesType } from './UtilTypes.ts';

export type Task = {
  description: string,
  creationDate: string,
  estimationFinishTime: string,
  hoursSpent: number,
  estimatedCost: number,
  cost: number,
  taskStatus: TaskStatusType,
  taskPriority: TaskPriorityType,
  taskType: TaskTypeType,
  assignee: string,
};

// export enum TaskStatus {
//   IN_PROGRESS = 'In Progress',
//   PENDING = 'Pending',
//   DONE = 'Done',
//   CANCELED = 'Canceled',
// }

export type TaskPreview = {
  taskType: TaskTypeType,
  assignee: string,
  taskPriority: TaskPriorityType,
  estimateFinishTime: string,
};

export const TaskStatus = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
  CANCELED: 'Canceled',
} as const;

export const TaskPriority = {
  MINOR: 'Minor',
  MAJOR: 'Major',
  CRITICAL: 'Critical',
} as const;

export const TaskType = {
  LOGISTIC: 'Logistic',
  PURCHASE: 'Purchase',
  INFORMATIC: 'Informatic',
} as const;

export type TaskStatusType = ValuesType<typeof TaskStatus>;
export type TaskPriorityType = ValuesType<typeof TaskPriority>;
export type TaskTypeType = ValuesType<typeof TaskType>;
