import { Badge } from '@chakra-ui/react';
import { TaskType, TaskTypeType } from '../types/TaskType.ts';

interface Props {
  taskType: TaskTypeType
}

const TaskTypeBadge = ({ taskType }: Props) => {
  const properTaskType = () => {
    switch (taskType) {
      case TaskType.INFORMATIC:
        return <Badge colorScheme="teal" variant="solid">{TaskType.INFORMATIC}</Badge>;
      case TaskType.PURCHASE:
        return <Badge colorScheme="purple" variant="solid">{TaskType.PURCHASE}</Badge>;
      case TaskType.LOGISTIC:
        return <Badge colorScheme="blue" variant="solid">{TaskType.LOGISTIC}</Badge>;
      default:
        return <Badge colorScheme="teal" variant="solid">Success</Badge>;
    }
  };

  return (
    <div style={{ fontSize: '20px' }}>{properTaskType()}</div>
  );
};

export default TaskTypeBadge;
