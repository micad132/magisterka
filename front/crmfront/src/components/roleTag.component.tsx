import { Tag } from '@chakra-ui/react';
import styled from 'styled-components';
import { RoleType } from '../types/UserType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: min-content;
`;

interface Props {
  role: RoleType,
}

const RoleTag = ({ role }: Props) => {
  const getProperTag = () => {
    switch (role) {
      case RoleType.ADMIN:
        return <TagWrapper size="large" variant="solid" colorScheme="blue">ADMIN</TagWrapper>;
      case RoleType.WORKER:
        return <TagWrapper size="large" variant="solid" colorScheme="green" key="worker">WORKER</TagWrapper>;
      case RoleType.CLIENT:
        return <TagWrapper size="large" variant="solid" colorScheme="teal">CLIENT</TagWrapper>;
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="teal">Error</TagWrapper>;
    }
  };

  return (
    <div style={{ padding: '0px' }}>{getProperTag()}</div>
  );
};

export default RoleTag;
