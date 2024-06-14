import styled from 'styled-components';
import TaskStatusBadgeComponent from '../../../../components/taskStatusBadge.component.tsx';
import { TaskStatus, TaskStatusType } from '../../../../types/TaskType.ts';

const TaskColumnHeader = styled.div<{ $taskStatus?: TaskStatusType }>`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px 0;
  color: #000;
  ${({ $taskStatus }) => {
    switch ($taskStatus) {
      case TaskStatus.PENDING:
        return `
          background-color: hsl(39, 100%, 90%); /* Jasny pomarańcz */
        `;
      case TaskStatus.IN_PROGRESS:
        return `
          background-color: hsl(174, 100%, 85%); /* Jasny zielony */
        `;
      case TaskStatus.DONE:
        return `
          background-color: hsl(120, 100%, 85%); /* Jasny niebieski */
        `;
      case TaskStatus.CANCELED:
        return `
          background-color: hsl(0, 100%, 90%); /* Jasny czerwony */
        `;
      default:
        return ''; // Domyślny styl, gdy taskStatus nie pasuje do żadnego przypadku
    }
  }}
`;

const TaskCount = styled.p`
  font-weight: bold;
  margin-top: 5px;
`;

interface Props {
  taskStatus: TaskStatusType,
  taskCount: number,
}

const TaskColumnHeaderComponent = ({ taskStatus, taskCount }: Props) => (
  <TaskColumnHeader $taskStatus={taskStatus}>
    <TaskStatusBadgeComponent taskStatus={taskStatus} />
    <TaskCount>Ilość usług: {taskCount}</TaskCount>
  </TaskColumnHeader>
);

export default TaskColumnHeaderComponent;
