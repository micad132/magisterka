import styled from 'styled-components';
import { TaskPriorityType } from '../../../../../types/TaskType.ts';
import TaskPriorityBadgeComponent from '../../../../../components/taskPriorityBadge.component.tsx';

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
    <span>Priorytet:</span>
    <TaskPriorityBadgeComponent taskPriority={taskPriority} />
  </TaskPriorityComponentWrapper>
);

export default TaskPriorityComponent;
