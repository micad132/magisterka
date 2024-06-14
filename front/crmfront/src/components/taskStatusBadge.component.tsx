import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import { TaskStatus, TaskStatusType } from '../types/TaskType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: max-content;
`;

interface Props {
  taskStatus: TaskStatusType,
}

const TaskStatusBadgeComponent = ({ taskStatus }: Props) => {
  const getProperTag = () => {
    switch (taskStatus) {
      case TaskStatus.PENDING:
        return <TagWrapper size="large" variant="solid" colorScheme="yellow">OCZEKUJĄCA</TagWrapper>;
      case TaskStatus.IN_PROGRESS:
        return <TagWrapper size="large" variant="solid" colorScheme="teal" key="worker">W TRAKCIE</TagWrapper>;
      case TaskStatus.DONE:
        return <TagWrapper size="large" variant="solid" colorScheme="green">WYKONANA</TagWrapper>;
      case TaskStatus.CANCELED:
        return <TagWrapper size="large" variant="solid" colorScheme="red">ANULOWANA</TagWrapper>;
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="blue">ADMIN</TagWrapper>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{getProperTag()}</div>
  );
};

export default TaskStatusBadgeComponent;
