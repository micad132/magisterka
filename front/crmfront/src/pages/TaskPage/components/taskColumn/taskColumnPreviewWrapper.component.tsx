import styled from 'styled-components';
import { ReactNode } from 'react';
import { TaskStatus, TaskStatusType } from '../../../../types/TaskType.ts';

const TaskPreviewWrapper = styled.div<{ $taskStatus: TaskStatusType }>`
  margin-top: 40px;
  color: black;
  overflow: auto;
  width: 350px;
  ${({ $taskStatus }) => {
    switch ($taskStatus) {
      case TaskStatus.PENDING:
        return `
          -webkit-box-shadow: 0px 0px 28px -12px orange;
          -moz-box-shadow: 0px 0px 28px -6px orange;
          box-shadow: 0px 0px 28px -7px orange;
        `;
      case TaskStatus.IN_PROGRESS:
        return `
          -webkit-box-shadow: 0px 0px 28px -12px teal;
          -moz-box-shadow: 0px 0px 28px -6px teal;
          box-shadow: 0px 0px 28px -7px teal;
        `;
      case TaskStatus.DONE:
        return `
          -webkit-box-shadow: 0px 0px 28px -12px green;
          -moz-box-shadow: 0px 0px 28px -6px green;
          box-shadow: 0px 0px 28px -7px green;
        `;
      case TaskStatus.CANCELED:
        return `
          -webkit-box-shadow: 0px 0px 28px -12px red;
          -moz-box-shadow: 0px 0px 28px -6px red;
          box-shadow: 0px 0px 28px -7px red;
        `;
      default:
        return ''; // Domyślny styl, gdy taskStatus nie pasuje do żadnego przypadku
    }
  }}
`;

interface Props {
  children: ReactNode,
  taskStatus: TaskStatusType,
}

const TaskColumnPreviewWrapperComponent = ({ children, taskStatus }: Props) => (
  <TaskPreviewWrapper $taskStatus={taskStatus}>
    {children}
  </TaskPreviewWrapper>

);

export default TaskColumnPreviewWrapperComponent;
