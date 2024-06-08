import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import { TaskOrigin, TaskOriginType, TaskStatus } from '../types/TaskType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: max-content;
`;

interface Props {
  taskOrigin: TaskOriginType,
}

const TaskOriginTagComponent = ({ taskOrigin }: Props) => {
  const getProperTag = () => {
    switch (taskOrigin) {
      case TaskOrigin.CREATED:
        return <TagWrapper size="large" variant="solid" colorScheme="purple">{TaskOrigin.CREATED}</TagWrapper>;
      case TaskOrigin.FROM_SUPPORT:
        return <TagWrapper size="large" variant="solid" colorScheme="pink" key="worker">{TaskOrigin.FROM_SUPPORT}</TagWrapper>;
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="blue">ADMIN</TagWrapper>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{getProperTag()}</div>
  );
};

export default TaskOriginTagComponent;
