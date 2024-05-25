import { ValuesType } from './UtilTypes.ts';
import { CommentResponseDTO } from './CommentType.ts';

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

export type TaskResponseDTO = {
  id: number,
  description: string,
  taskStatus: TaskStatusType,
  taskPriority: TaskPriorityType,
  taskType: TaskTypeType,
  assigneeUsername: string,
  creatorUsername: string,
  comments: CommentResponseDTO[],
  creationDate: string,
  estimationFinishTime: string,
  hoursSpent: number,
  estimatedCost: number,
  cost: number,
};

export type AddingTask = {
  description: string,
  taskStatus: TaskStatusType,
  taskPriority: TaskPriorityType,
  taskType: TaskTypeType,
  estimatedCost: number,
  estimatedFinishTime: string,
};

export type AddingTaskRequest = AddingTask & {
  creatorId: number,
};

export type PreviewTask = {
  taskStatus: TaskStatusType,
  taskPriority: TaskPriorityType,
  totalHoursSpent: number,
  estimatedFinishTime: string,
};

// export enum TaskStatus {
//   IN_PROGRESS = 'In Progress',
//   PENDING = 'Pending',
//   DONE = 'Done',
//   CANCELED = 'Canceled',
// }

export type TaskPreview = {
  id: number,
  taskType: TaskTypeType,
  assigneeUsername: string,
  taskPriority: TaskPriorityType,
  estimateFinishTime: string,
};

export const TaskStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  CANCELED: 'CANCELED',
} as const;

export const TaskPriority = {
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  CRITICAL: 'CRITICAL',
} as const;

export const TaskType = {
  LOGISTIC: 'LOGISTIC',
  PURCHASE: 'PURCHASE',
  INFORMATIC: 'INFORMATIC',
} as const;

export type TaskStatusType = ValuesType<typeof TaskStatus>;
export type TaskPriorityType = ValuesType<typeof TaskPriority>;
export type TaskTypeType = ValuesType<typeof TaskType>;

export const ADDING_TASK_INITIAL_VALUE: AddingTask = {
  description: '',
  estimatedFinishTime: '',
  estimatedCost: 0,
  taskPriority: TaskPriority.MINOR,
  taskStatus: TaskStatus.IN_PROGRESS,
  taskType: TaskType.PURCHASE,
};

export const PREVIEW_TASK_INITIAL_VALUES: PreviewTask = {
  taskStatus: TaskStatus.IN_PROGRESS,
  totalHoursSpent: 0,
  taskPriority: TaskPriority.MINOR,
  estimatedFinishTime: '',
};
