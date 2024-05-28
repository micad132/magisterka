import styled from 'styled-components';
import TaskStatusBadgeComponent from '../../../components/taskStatusBadge.component.tsx';
import TaskTypeBadge from '../../../components/taskTypeBadge.component.tsx';
import {
  TaskPriority,
  TaskPriorityType,
  TaskStatus,
  TaskStatusType,
  TaskType,
  TaskTypeType,
} from '../../../types/TaskType.ts';
import TaskPriorityBadgeComponent from '../../../components/taskPriorityBadge.component.tsx';

const SingleTaskStatuses = styled.div`
  display: flex;
  margin: 20px auto;
  width: max-content;
  gap: 20px;
`;

const SingleStatus = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  taskStatus: TaskStatusType,
  taskType: TaskTypeType,
  taskPriority: TaskPriorityType,
}

const SingleTaskStasusesComponent = ({ taskType, taskPriority, taskStatus }: Props) => (
  <SingleTaskStatuses>
    <SingleStatus>
      <span>Task status</span>
      <TaskStatusBadgeComponent taskStatus={taskStatus} />
    </SingleStatus>
    <SingleStatus>
      <span>Task type</span>
      <TaskTypeBadge taskType={taskType} />
    </SingleStatus>
    <SingleStatus>
      <span>Task priority</span>
      <TaskPriorityBadgeComponent taskPriority={taskPriority} />
    </SingleStatus>

  </SingleTaskStatuses>
);

export default SingleTaskStasusesComponent;
