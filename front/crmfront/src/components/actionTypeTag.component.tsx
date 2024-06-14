import styled from 'styled-components';
import { Tag, Tooltip } from '@chakra-ui/react';
import { ActionType, ActionTypeType } from '../types/HistoryType.ts';

const TagWrapper = styled(Tag)`
  padding: 5px 10px !important;
  width: min-content;
  text-transform: uppercase;
`;

interface Props {
  actionType: ActionTypeType,
}

const ActionTypeTagComponent = ({ actionType }: Props) => {
  const getProperTag = () => {
    switch (actionType) {
      case ActionType.TASK:
        return (
          <Tooltip label="Task related action">
            <TagWrapper size="large" variant="solid" colorScheme="green">
              USŁUGA
            </TagWrapper>
          </Tooltip>
        );
      case ActionType.COMMENT:
        return (
          <Tooltip label="Comment related action">
            <TagWrapper size="large" variant="solid" colorScheme="purple" key="worker">KOMENTARZ</TagWrapper>
          </Tooltip>
        );
      case ActionType.SUPPORT:
        return (
          <Tooltip label="Support related action">
            <TagWrapper size="large" variant="solid" colorScheme="pink">WSPARCIE</TagWrapper>
          </Tooltip>
        );
      case ActionType.PROFILE:
        return (
          <Tooltip label="Profile related action">
            <TagWrapper size="large" variant="solid" colorScheme="orange">PROFIL</TagWrapper>
          </Tooltip>
        );
      case ActionType.MESSAGE:
        return (
          <Tooltip label="Message related action">
            <TagWrapper size="large" variant="solid" colorScheme="blue">WIADOMOŚĆ</TagWrapper>
          </Tooltip>
        );
      case ActionType.SURVEY:
        return (
          <Tooltip label="Survey related action">
            <TagWrapper size="large" variant="solid" colorScheme="pink">ANKIETA</TagWrapper>
          </Tooltip>
        );
      default:
        return <TagWrapper size="large" variant="solid" colorScheme="teal">Error</TagWrapper>;
    }
  };

  return (
    <div>{getProperTag()}</div>
  );
};

export default ActionTypeTagComponent;
