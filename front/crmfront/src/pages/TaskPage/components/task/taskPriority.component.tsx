import styled from 'styled-components';
import { TaskPriorityType } from '../../../../types/TaskType.ts';
import CustomLabel from './customLabel.component.tsx';

const TaskPriorityComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {
  taskPriority: TaskPriorityType,
}

const TaskPriorityComponent = ({ taskPriority }: Props) => (
  <TaskPriorityComponentWrapper>
    <span>Priority:</span>
    <CustomLabel text={taskPriority} />
  </TaskPriorityComponentWrapper>
);

export default TaskPriorityComponent;
