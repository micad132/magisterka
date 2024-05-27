import { MOCKED_TASKS } from '../../mock/mockTasks.tsx';
import { TaskPreview, TaskStatus } from '../../types/TaskType.ts';

export const PENDING_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === TaskStatus.PENDING);

export const IN_PROGRESS_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === TaskStatus.IN_PROGRESS);

export const DONE_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === TaskStatus.DONE);

export const CANCELED_TASKS = MOCKED_TASKS.filter((task) => task.taskStatus === TaskStatus.CANCELED);

export const PENDING_PREVIEW_TASKS: TaskPreview[] = PENDING_TASKS.map((task) => ({
  id: 0,
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assigneeUsername: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));

export const IN_PROGRESS_PREVIEW_TASKS: TaskPreview[] = IN_PROGRESS_TASKS.map((task) => ({
  id: 0,
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assigneeUsername: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));

export const DONE_PREVIEW_TASKS: TaskPreview[] = DONE_TASKS.map((task) => ({
  id: 0,
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assigneeUsername: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));

export const CANCELED_PREVIEW_TASKS: TaskPreview[] = CANCELED_TASKS.map((task) => ({
  id: 0,
  taskPriority: task.taskPriority,
  taskType: task.taskType,
  assigneeUsername: task.assignee,
  estimateFinishTime: task.estimationFinishTime,
}));
