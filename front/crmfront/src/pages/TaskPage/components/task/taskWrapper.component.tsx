import styled from 'styled-components';
import {
  Task, TaskPriority, TaskStatus, TaskType,
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

const TaskWrapperDiv = styled.div`
  
  display: flex;
  gap: 30px;
  margin-top: 20px;
  margin-left: 60px;
`;

const TaskWrapper = () => {
  console.log('ddhj');
  return (
    <TaskWrapperDiv>
      {/* {MOCKED_TASKS.map((task) => <SingleTask task={task} />)} */}
      <TaskColumnComponent taskStatus={TaskStatus.PENDING} taskPreviews={PENDING_PREVIEW_TASKS} />
      <TaskColumnComponent taskStatus={TaskStatus.IN_PROGRESS} taskPreviews={IN_PROGRESS_PREVIEW_TASKS} />
      <TaskColumnComponent taskStatus={TaskStatus.DONE} taskPreviews={DONE_PREVIEW_TASKS} />
      <TaskColumnComponent taskStatus={TaskStatus.CANCELED} taskPreviews={CANCELED_PREVIEW_TASKS} />
    </TaskWrapperDiv>
  );
};

export default TaskWrapper;
