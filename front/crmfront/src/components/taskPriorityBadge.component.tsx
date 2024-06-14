import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import { TaskPriority, TaskPriorityType } from '../types/TaskType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: max-content;
`;

interface Props {
  taskPriority: TaskPriorityType,
}

const TaskPriorityBadgeComponent = ({ taskPriority }: Props) => {
  const getProperTag = () => {
    switch (taskPriority) {
      case TaskPriority.CRITICAL:
        return <TagWrapper size="large" variant="solid" colorScheme="red">KRYTYCZNY</TagWrapper>;
      case TaskPriority.MINOR:
        return <TagWrapper size="large" variant="solid" colorScheme="green">NISKI</TagWrapper>;
      case TaskPriority.MAJOR:
        return <TagWrapper size="large" variant="solid" colorScheme="orange">POWAŻNY</TagWrapper>;
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="blue">ADMIN</TagWrapper>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{getProperTag()}</div>
  );
};

export default TaskPriorityBadgeComponent;
