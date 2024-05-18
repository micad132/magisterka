import { useState } from 'react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import SingleMessageComponent from './components/singleMessage.component.tsx';
import MessagesCountComponent from './components/messagesCount.component.tsx';
import MessagesWrapperComponent from './components/messagesWrapper.component.tsx';
import { ModalProps, SelectValue } from '../../types/UtilTypes.ts';
import SelectReceiverComponent from './components/selectReceiver.component.tsx';
import { AddingMessageStateType, INITIAL_ADDING_MESSAGE_VALUE, MessageType } from '../../types/MessageType.ts';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers } from '../../store/userSlice.tsx';
import ModalComponent from '../../components/modal.component.tsx';
import AddingMessageModalBodyComponent from './components/addingMessage/addingMessageModalBody.component.tsx';
import { MockedUsers } from '../../mock/mockUsers.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';

const MOCKED_MESSAGES: MessageType[] = [
  {
    author: 'mikad132',
    receiver: 'kimek132',
    date: '04.03.2000',
    description: 'lorehj fdsfkhdks hfkdshvkfds',
  },
  {
    author: 'mikad132',
    receiver: 'kimek132',
    date: '04.03.2000',
    description: 'lorehj fdsfkhdks hfkdshvkfds',
  },
  {
    author: 'mikad132',
    receiver: 'kimek132',
    date: '04.03.2000',
    description: 'lorehj fdsfkhdks hfkdshvkfds',
  },
  {
    author: 'mikad132',
    receiver: 'kimek132',
    date: '04.03.2000',
    description: 'lorehj fdsfkhdks hfkdshvkfds',
  },

];

const MessagesPageContainer = () => {
  const [filterUser, setFilterUser] = useState<string>('');
  const [message, setMessage] = useState<AddingMessageStateType>(INITIAL_ADDING_MESSAGE_VALUE);

  const users = useAppSelector(getAllUsers);

  const USER_SELECT_VALUES: SelectValue[] = MockedUsers.map((user) => ({
    text: user.username,
    value: user.username,
  }));

  const onMessageTextChange = (value: string) => {
    setMessage((prevState) => ({
      ...prevState,
      description: value,
    }));
  };

  const onReceiverChange = (value: string) => {
    setMessage((prevState) => ({
      ...prevState,
      receiver: value,
    }));
  };

  const onSendMessage = () => {
    console.log('MESSAGE', message);
  };

  const addingMessageModalProps: ModalProps = {
    mainButtonAction: onSendMessage,
    buttonSize: 'md',
    modalActionButtonText: 'Send',
    modalHeader: 'Send message to',
    buttonText: 'Send message',
    modalBody: <AddingMessageModalBodyComponent
      author="mikad132"
      users={USER_SELECT_VALUES}
      messageText={message.description}
      onMessageTextChange={onMessageTextChange}
      onReceiverChange={onReceiverChange}
    />,
  };

  const messages = MOCKED_MESSAGES.map((messageType, index) => <SingleMessageComponent key={index} message={messageType} />);

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Messages" />
      <ModalComponent
        modalProps={addingMessageModalProps}
      />
      <MessagesCountComponent />
      <SelectReceiverComponent
        onChange={setFilterUser}
        options={USER_SELECT_VALUES}
      />
      <MessagesWrapperComponent>
        {messages}
      </MessagesWrapperComponent>

    </PageWrapperComponent>
  );
};

export default MessagesPageContainer;
