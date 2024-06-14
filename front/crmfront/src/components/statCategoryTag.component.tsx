import styled from 'styled-components';
import { Tag } from '@chakra-ui/react';
import { StatCategory, StatCategoryType } from '../types/StatType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: max-content;
`;

interface Props {
  statCategory: StatCategoryType,
}

const StatCategoryTagComponent = ({ statCategory }: Props) => {
  const getProperTag = () => {
    switch (statCategory) {
      case StatCategory.TASK:
        return <TagWrapper size="large" variant="solid" colorScheme="red">USŁUGA</TagWrapper>;
      case StatCategory.PEOPLE:
        return <TagWrapper size="large" variant="solid" colorScheme="green">UŻYTKOWNICY</TagWrapper>;
      case StatCategory.MESSAGE:
        return <TagWrapper size="large" variant="solid" colorScheme="orange">WIADOMOŚCI</TagWrapper>;
      case StatCategory.SUPPORT:
        return <TagWrapper size="large" variant="solid" colorScheme="pink">WSPARCIE</TagWrapper>;
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="blue">ADMIN</TagWrapper>;
    }
  };

  return (
    <div style={{ fontSize: '1rem' }}>{getProperTag()}</div>
  );
};

export default StatCategoryTagComponent;
