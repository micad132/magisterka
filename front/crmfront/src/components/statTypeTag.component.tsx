import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import { TaskType } from '../types/TaskType.ts';
import { StatType, StatTypeType } from '../types/StatType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: max-content;
`;

interface Props {
  statType: StatTypeType,
}

const StatTypeTagComponent = ({ statType }: Props) => {
  const properTaskType = () => {
    switch (statType) {
      case StatType.BAR:
        return <TagWrapper size="large" colorScheme="teal" variant="solid">{StatType.BAR}</TagWrapper>;
      case StatType.PIE:
        return <TagWrapper size="large" colorScheme="purple" variant="solid">{StatType.PIE}</TagWrapper>;
      case StatType.LINE:
        return <TagWrapper size="large" colorScheme="blue" variant="solid">{StatType.LINE}</TagWrapper>;
      case StatType.DOUGHNUT:
        return <TagWrapper size="large" colorScheme="blue" variant="solid">{StatType.DOUGHNUT}</TagWrapper>;
      default:
        return <TagWrapper size="large" colorScheme="teal" variant="solid">Success</TagWrapper>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{properTaskType()}</div>
  );
};

export default StatTypeTagComponent;
