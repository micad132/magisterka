// @ts-nocheck
import styled from 'styled-components';
import { useAppSelector } from '../../../../../../utils/hooks.ts';
import { getAllMessages } from '../../../../../../store/messageSlice.tsx';
import { RoleType } from '../../../../../../types/UserType.ts';
import CountDivComponent from './countDiv.component.tsx';
import CountDivContentComponent from './countDivContent.component.tsx';
import RoleTagComponent from '../../../../../../components/roleTag.component.tsx';

const Wrapper = styled.div`
  font-size: 1.3rem;
`;

const Count = styled.p`
  font-weight: bold;
`;

const MessageCountWrapperComponent = () => {
  const v = 3;
  const messages = useAppSelector(getAllMessages);
  const clientMessages = messages.filter((msg) => msg.authorRole === RoleType.CLIENT);
  const workerMessages = messages.filter((msg) => msg.authorRole === RoleType.WORKER);
  return (
    <Wrapper>
      <p>Wiadomości według roli</p>
      <CountDivComponent>
        <CountDivContentComponent>
          <RoleTagComponent role={RoleType.CLIENT} />
          <Count>{clientMessages.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <RoleTagComponent role={RoleType.WORKER} />
          <Count>{workerMessages.length}</Count>
        </CountDivContentComponent>
      </CountDivComponent>
    </Wrapper>
  );
};

export default MessageCountWrapperComponent;
