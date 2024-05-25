import styled from 'styled-components';
import {
  Task, TaskPreview, TaskPriority, TaskStatus, TaskType,
} from '../../../../types/TaskType.ts';
import SingleTask from './singleTask.component.tsx';
import TaskColumnComponent from '../taskColumn/taskColumn.component.tsx';
import { MOCKED_TASKS } from '../../../../mock/mockTasks.tsx';
import {
  CANCELED_PREVIEW_TASKS,
  DONE_PREVIEW_TASKS,
  IN_PROGRESS_PREVIEW_TASKS,
  PENDING_PREVIEW_TASKS,
} from '../../../../utils/mappers/taskMapper.tsx';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { getAllTasks } from '../../../../store/taskSlice.tsx';

const TaskWrapperDiv = styled.div`
  
  display: flex;
  gap: 30px;
  margin-top: 20px;
  margin-left: 60px;
`;

const TaskWrapper = () => {
  const a = 3;
  const tasks = useAppSelector(getAllTasks);
  const pendingTasks = tasks.filter((task) => task.taskStatus === TaskStatus.PENDING).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
  }));
  const inProgressTasks = tasks.filter((task) => task.taskStatus === TaskStatus.IN_PROGRESS).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
  }));
  const doneTasks = tasks.filter((task) => task.taskStatus === TaskStatus.DONE).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
  }));
  const canceledTasks = tasks.filter((task) => task.taskStatus === TaskStatus.CANCELED).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
  }));
  return (
    <TaskWrapperDiv>
      <TaskColumnComponent taskStatus={TaskStatus.PENDING} taskPreviews={pendingTasks} />
      <TaskColumnComponent taskStatus={TaskStatus.IN_PROGRESS} taskPreviews={inProgressTasks} />
      <TaskColumnComponent taskStatus={TaskStatus.DONE} taskPreviews={doneTasks} />
      <TaskColumnComponent taskStatus={TaskStatus.CANCELED} taskPreviews={canceledTasks} />
    </TaskWrapperDiv>
  );
};

export default TaskWrapper;
