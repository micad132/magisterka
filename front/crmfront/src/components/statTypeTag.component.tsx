import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
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
        return <TagWrapper size="large" colorScheme="teal" variant="solid">SŁUPKOWY</TagWrapper>;
      case StatType.PIE:
        return <TagWrapper size="large" colorScheme="purple" variant="solid">KOŁOWY</TagWrapper>;
      case StatType.LINE:
        return <TagWrapper size="large" colorScheme="blue" variant="solid">LINIOWY</TagWrapper>;
      case StatType.DOUGHNUT:
        return <TagWrapper size="large" colorScheme="blue" variant="solid">PIERŚCIEŃ</TagWrapper>;
      default:
        return <TagWrapper size="large" colorScheme="teal" variant="solid">Success</TagWrapper>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{properTaskType()}</div>
  );
};

export default StatTypeTagComponent;
