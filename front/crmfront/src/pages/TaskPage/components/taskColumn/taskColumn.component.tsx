import styled from 'styled-components';
import TaskColumnHeaderComponent from './taskColumnHeader.component.tsx';
import { TaskPreview, TaskStatusType } from '../../../../types/TaskType.ts';
import TaskColumnPreviewComponent from './taskColumnPreview.component.tsx';

const TaskColumnWrapper = styled.div`
  width: 400px;
  min-height: min-content;
  border-right: 3px solid var(--background-color);
  //overflow: auto;
  padding: 0 30px;
  //background-color: chocolate;
`;

const TaskWrapper = styled.div`
  
  //TODO FIX TO
  //height: 1000px;
  //overflow: auto;
`;

interface Props {
  taskStatus: TaskStatusType,
  taskPreviews: TaskPreview[],
}

const TaskColumnComponent = ({ taskStatus, taskPreviews }: Props) => {
  console.log('fdjjfd');

  const taskPreviewsMapped = taskPreviews.map((taskPreview) => <TaskColumnPreviewComponent taskPreview={taskPreview} taskStatus={taskStatus} />);

  return (
    <TaskColumnWrapper>
      <TaskColumnHeaderComponent taskStatus={taskStatus} taskCount={taskPreviewsMapped.length} />
      <TaskWrapper>{taskPreviewsMapped}</TaskWrapper>
    </TaskColumnWrapper>
  );
};

export default TaskColumnComponent;
