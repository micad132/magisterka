import { ValuesType } from './UtilTypes.ts';
import { CommentResponseDTO } from './CommentType.ts';
import { UserDTOTaskDetailsAssignee, UserDTOTaskDetailsCreator } from './UserType.ts';

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
  taskOrigin: TaskOriginType,
  assignee: string,
};

export type TaskResponseDTO = {
  id: number,
  description: string,
  taskStatus: TaskStatusType,
  taskPriority: TaskPriorityType,
  taskType: TaskTypeType,
  taskOrigin: TaskOriginType,
  comments: CommentResponseDTO[],
  userDTOTaskDetailsCreator: UserDTOTaskDetailsCreator,
  userDTOTaskDetailsAssignee: UserDTOTaskDetailsAssignee,
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
  taskOrigin: TaskOriginType,
  estimatedCost: number,
  estimatedFinishTime: string,
  assigneeId: number | null,
};

export type AddingTaskRequest = AddingTask & {
  creatorId: number,
};

export type PreviewTask = {
  taskStatus: TaskStatusType,
  taskPriority: TaskPriorityType,
  totalHoursSpent: number,
  actualCost: number,
  assigneeUsername: string,
};

export type TaskPreview = {
  id: number,
  taskType: TaskTypeType,
  userDTOTaskDetailsCreator: UserDTOTaskDetailsCreator,
  userDTOTaskDetailsAssignee: UserDTOTaskDetailsAssignee,
  taskPriority: TaskPriorityType,
  estimateFinishTime: string,
  actualCost: number,
  estimateCost: number,
  hoursSpent: number,
};

export type EditTaskPreview = {
  id: number,
  assigneeId: number,
  taskPriority: TaskPriorityType,
  taskStatus: TaskStatusType,
  hoursSpent: number,
  actualCost: number,
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

export const TaskOrigin = {
  CREATED: 'CREATED',
  FROM_SUPPORT: 'FROM_SUPPORT',
} as const;

export type TaskStatusType = ValuesType<typeof TaskStatus>;
export type TaskPriorityType = ValuesType<typeof TaskPriority>;
export type TaskTypeType = ValuesType<typeof TaskType>;
export type TaskOriginType = ValuesType<typeof TaskOrigin>;

export const ADDING_TASK_INITIAL_VALUE: AddingTask = {
  description: '',
  estimatedFinishTime: '',
  estimatedCost: 0,
  taskPriority: TaskPriority.MINOR,
  taskStatus: TaskStatus.IN_PROGRESS,
  taskType: TaskType.PURCHASE,
  taskOrigin: TaskOrigin.CREATED,
  assigneeId: null,
};

export const PREVIEW_TASK_INITIAL_VALUES: PreviewTask = {
  taskStatus: TaskStatus.IN_PROGRESS,
  totalHoursSpent: 0,
  taskPriority: TaskPriority.MINOR,
  actualCost: 0,
  assigneeUsername: '',
};
