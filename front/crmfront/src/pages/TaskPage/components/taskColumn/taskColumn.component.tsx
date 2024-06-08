import styled from 'styled-components';
import TaskColumnHeaderComponent from './taskColumnHeader.component.tsx';
import { TaskPreview, TaskStatusType } from '../../../../types/TaskType.ts';
import TaskColumnPreviewComponent from './taskColumnPreview.component.tsx';

const TaskColumnWrapper = styled.div`
  width: 500px;
  min-height: min-content;
  border-right: 3px solid var(--background-color);
 
  padding: 0 30px;
 
  //background-color: chocolate;
`;

const TaskWrapper = styled.div`

  overflow: auto;
  //TODO FIX TO
  height: 700px;
  //overflow: auto;
  padding: 30px;
`;

interface Props {
  taskStatus: TaskStatusType,
  taskPreviews: TaskPreview[],
}

const TaskColumnComponent = ({ taskStatus, taskPreviews }: Props) => {
  console.log('task preview', taskPreviews);
  const taskPreviewsMapped = taskPreviews.map((taskPreview) => <TaskColumnPreviewComponent key={taskPreview.id} taskPreview={taskPreview} taskStatus={taskStatus} />);

  return (
    <TaskColumnWrapper>
      <TaskColumnHeaderComponent taskStatus={taskStatus} taskCount={taskPreviewsMapped.length} />
      <TaskWrapper>{taskPreviewsMapped}</TaskWrapper>
    </TaskColumnWrapper>
  );
};

export default TaskColumnComponent;
