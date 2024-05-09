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
  console.log('jfjd');

  const getProperTag = () => {
    switch (actionType) {
      case ActionType.TASK:
        return (
          <Tooltip label="Task related action">
            <TagWrapper size="large" variant="solid" colorScheme="green">
              {ActionType.TASK}
            </TagWrapper>
          </Tooltip>
        );
      case ActionType.COMMENT:
        return (
          <Tooltip label="Comment related action">
            <TagWrapper size="large" variant="solid" colorScheme="purple" key="worker">{ActionType.COMMENT}</TagWrapper>
          </Tooltip>
        );
      case ActionType.SUPPORT:
        return (
          <Tooltip label="Support related action">
            <TagWrapper size="large" variant="solid" colorScheme="pink">{ActionType.SUPPORT}</TagWrapper>
          </Tooltip>
        );
      case ActionType.PROFILE:
        return (
          <Tooltip label="Profile related action">
            <TagWrapper size="large" variant="solid" colorScheme="orange">{ActionType.PROFILE}</TagWrapper>
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
