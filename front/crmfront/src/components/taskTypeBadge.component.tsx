import { Badge, Tag } from '@chakra-ui/react';
import styled from 'styled-components';
import { TaskType, TaskTypeType } from '../types/TaskType.ts';

const StyledTag = styled(Tag)`
  padding: 5px 10px !important;
  width: max-content;
`;

interface Props {
  taskType: TaskTypeType
}

const TaskTypeBadge = ({ taskType }: Props) => {
  const properTaskType = () => {
    switch (taskType) {
      case TaskType.INFORMATIC:
        return <StyledTag size="large" colorScheme="teal" variant="solid">{TaskType.INFORMATIC}</StyledTag>;
      case TaskType.PURCHASE:
        return <StyledTag size="large" colorScheme="purple" variant="solid">{TaskType.PURCHASE}</StyledTag>;
      case TaskType.LOGISTIC:
        return <StyledTag size="large" colorScheme="blue" variant="solid">{TaskType.LOGISTIC}</StyledTag>;
      default:
        return <StyledTag size="large" colorScheme="teal" variant="solid">Success</StyledTag>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{properTaskType()}</div>
  );
};

export default TaskTypeBadge;
