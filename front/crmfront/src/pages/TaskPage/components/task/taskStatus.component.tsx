import styled from 'styled-components';
import { TaskStatus } from '../../../../types/TaskType.ts';
import CustomLabel from './customLabel.component.tsx';

const TaskStatusComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {
  taskStatus: TaskStatus,
}

const TaskStatusComponent = ({ taskStatus }: Props) => (
  <TaskStatusComponentWrapper>
    <span>Status:</span>
    <CustomLabel text={taskStatus} />
  </TaskStatusComponentWrapper>
);

export default TaskStatusComponent;
