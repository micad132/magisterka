import styled from 'styled-components';
import TaskStatusBadgeComponent from '../../../components/taskStatusBadge.component.tsx';
import TaskTypeBadge from '../../../components/taskTypeBadge.component.tsx';
import {
  TaskOriginType,
  TaskPriorityType,
  TaskStatusType,
  TaskTypeType,
} from '../../../types/TaskType.ts';
import TaskPriorityBadgeComponent from '../../../components/taskPriorityBadge.component.tsx';
import TaskOriginTagComponent from '../../../components/taskOriginTag.component.tsx';

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
  taskOrigin: TaskOriginType,
}

const SingleTaskStasusesComponent = ({
  taskType, taskPriority, taskStatus, taskOrigin,
}: Props) => (
  <SingleTaskStatuses>
    <SingleStatus>
      <span>Status usługi:</span>
      <TaskStatusBadgeComponent taskStatus={taskStatus} />
    </SingleStatus>
    <SingleStatus>
      <span>Typ usługi:</span>
      <TaskTypeBadge taskType={taskType} />
    </SingleStatus>
    <SingleStatus>
      <span>Priorytet usługi:</span>
      <TaskPriorityBadgeComponent taskPriority={taskPriority} />
    </SingleStatus>
    <SingleStatus>
      <span>Sposób powstania:</span>
      <TaskOriginTagComponent taskOrigin={taskOrigin} />
    </SingleStatus>

  </SingleTaskStatuses>
);

export default SingleTaskStasusesComponent;
