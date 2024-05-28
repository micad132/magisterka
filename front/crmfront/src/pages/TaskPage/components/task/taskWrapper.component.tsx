import styled from 'styled-components';
import {
  TaskPreview, TaskResponseDTO, TaskStatus,
} from '../../../../types/TaskType.ts';
import TaskColumnComponent from '../taskColumn/taskColumn.component.tsx';

const TaskWrapperDiv = styled.div`
  
  display: flex;
  gap: 30px;
  margin-top: 20px;
  margin-left: 60px;
`;

interface Props {
  tasks: TaskResponseDTO[],
}

const TaskWrapper = ({ tasks }: Props) => {
  const pendingTasks = tasks.filter((task) => task.taskStatus === TaskStatus.PENDING).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
    actualCost: preview.cost,
    creatorUsername: preview.creatorUsername,
    estimateCost: preview.estimatedCost,
    hoursSpent: preview.hoursSpent,
  }));
  const inProgressTasks = tasks.filter((task) => task.taskStatus === TaskStatus.IN_PROGRESS).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
    actualCost: preview.cost,
    creatorUsername: preview.creatorUsername,
    estimateCost: preview.estimatedCost,
    hoursSpent: preview.hoursSpent,
  }));
  const doneTasks = tasks.filter((task) => task.taskStatus === TaskStatus.DONE).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
    actualCost: preview.cost,
    creatorUsername: preview.creatorUsername,
    estimateCost: preview.estimatedCost,
    hoursSpent: preview.hoursSpent,
  }));
  const canceledTasks = tasks.filter((task) => task.taskStatus === TaskStatus.CANCELED).map((preview): TaskPreview => ({
    id: preview.id,
    taskPriority: preview.taskPriority,
    taskType: preview.taskType,
    estimateFinishTime: preview.estimationFinishTime,
    assigneeUsername: preview.assigneeUsername,
    actualCost: preview.cost,
    creatorUsername: preview.creatorUsername,
    estimateCost: preview.estimatedCost,
    hoursSpent: preview.hoursSpent,
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
