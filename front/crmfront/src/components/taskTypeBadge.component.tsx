import { Badge } from '@chakra-ui/react';
import { TaskType } from '../types/TaskType.ts';

interface Props {
  taskType: TaskType
}

const TaskTypeBadge = ({ taskType }: Props) => {
  console.log('fdfd');

  const properTaskType = () => {
    switch (taskType) {
      case TaskType.INFORMATIC:
        return <Badge colorScheme="teal" variant="solid">Informatic</Badge>;
      case TaskType.PURCHASE:
        return <Badge colorScheme="purple" variant="solid">Purchase</Badge>;
      case TaskType.LOGISTIC:
        return <Badge colorScheme="blue" variant="solid">Logistic</Badge>;
      default:
        return <Badge colorScheme="teal" variant="solid">Success</Badge>;
    }
  };

  return (
    <div style={{ fontSize: '20px' }}>{properTaskType()}</div>
  );
};

export default TaskTypeBadge;
