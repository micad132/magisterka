import { Tag } from '@chakra-ui/react';
import styled from 'styled-components';
import { RoleType, RoleTypeType } from '../types/UserType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: min-content;
`;

interface Props {
  role: RoleTypeType,
}

const RoleTag = ({ role }: Props) => {
  const getProperTag = () => {
    switch (role) {
      case RoleType.ADMIN:
        return <TagWrapper size="large" variant="solid" colorScheme="green">{RoleType.ADMIN}</TagWrapper>;
      case RoleType.WORKER:
        return <TagWrapper size="large" variant="solid" colorScheme="teal" key="worker">{RoleType.WORKER}</TagWrapper>;
      case RoleType.CLIENT:
        return <TagWrapper size="large" variant="solid" colorScheme="blue">{RoleType.CLIENT}</TagWrapper>;
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="teal">Error</TagWrapper>;
    }
  };

  return (
    <div style={{ padding: '0px' }}>{getProperTag()}</div>
  );
};

export default RoleTag;
