import { MOCKED_TASKS } from '../../mock/mockTasks.tsx';
import { TaskPreview } from '../../types/TaskType.ts';

export const PENDING_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === 'Pending');

export const IN_PROGRESS_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === 'In progress');

export const DONE_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === 'Done');

export const CANCELED_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === 'Canceled');

export const PENDING_PREVIEW_TASKS: TaskPreview[] = PENDING_TASKS.map((task) => ({
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assignee: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));

export const IN_PROGRESS_PREVIEW_TASKS: TaskPreview[] = IN_PROGRESS_TASKS.map((task) => ({
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assignee: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));

export const DONE_PREVIEW_TASKS: TaskPreview[] = DONE_TASKS.map((task) => ({
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assignee: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));

export const CANCELED_PREVIEW_TASKS: TaskPreview[] = CANCELED_TASKS.map((task) => ({
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assignee: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));
