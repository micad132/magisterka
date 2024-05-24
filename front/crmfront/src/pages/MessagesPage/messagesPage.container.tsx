import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import SingleMessageComponent from './components/singleMessage.component.tsx';
import MessagesCountComponent from './components/messagesCount.component.tsx';
import MessagesWrapperComponent from './components/messagesWrapper.component.tsx';
import { ModalProps, SelectValue } from '../../types/UtilTypes.ts';
import SelectReceiverComponent from './components/selectReceiver.component.tsx';
import {
  AddingMessage,
  AddingMessageStateType,
  INITIAL_ADDING_MESSAGE_VALUE,
  MessageType,
} from '../../types/MessageType.ts';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers, getUserDetails } from '../../store/userSlice.tsx';
import ModalComponent from '../../components/modal.component.tsx';
import AddingMessageModalBodyComponent from './components/addingMessage/addingMessageModalBody.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import { addingMessageThunk, getAllMessages } from '../../store/messageSlice.tsx';

const MOCKED_MESSAGES: MessageType[] = [
  {
    id: 1,
    authorName: 'mikad132',
    receiverName: 'kimek132',
    date: '04.03.2000',
    text: 'lorehj fdsfkhdks hfkdshvkfds',
  },
  {
    id: 2,
    authorName: 'mikad132',
    receiverName: 'kimek132',
    date: '04.03.2000',
    text: 'lorehj fdsfkhdks hfkdshvkfds',
  },
  {
    id: 3,
    authorName: 'mikad132',
    receiverName: 'kimek132',
    date: '04.03.2000',
    text: 'lorehj fdsfkhdks hfkdshvkfds',
  },
  {
    id: 4,
    authorName: 'mikad132',
    receiverName: 'kimek132',
    date: '04.03.2000',
    text: 'lorehj fdsfkhdks hfkdshvkfds',
  },

];

const MessagesPageContainer = () => {
  const [filterUser, setFilterUser] = useState<string>('all');
  const [message, setMessage] = useState<AddingMessageStateType>(INITIAL_ADDING_MESSAGE_VALUE);

  const dispatch = useAppDispatch();
  const toast = useToast();
  const users = useAppSelector(getAllUsers);
  const loggedUser = useAppSelector(getUserDetails);
  const messages = useAppSelector(getAllMessages);

  const USER_SELECT_VALUES: SelectValue[] = users.filter((user) => user.username !== loggedUser.username).map((user) => ({
    text: `${user.name} ${user.surname} - ${user.username}`,
    value: user.username,
  }));

  USER_SELECT_VALUES.push({
    text: 'all',
    value: 'all',
  });

  const onMessageTextChange = (value: string) => {
    setMessage((prevState) => ({
      ...prevState,
      description: value,
    }));
  };

  const onReceiverChange = (value: string) => {
    console.log('VALUE', value);
    setMessage((prevState) => ({
      ...prevState,
      receiver: value,
    }));
  };

  const onSendMessage = () => {
    console.log('MESSAGE', message);
    const receiver = users.find((user) => user.username === message.receiver);
    const obj: AddingMessage = {
      text: message.description,
      receiverId: receiver?.id ?? 0,
      authorId: loggedUser.id ?? 0,
    };
    try {
      dispatch(addingMessageThunk(obj));
      toast({
        title: 'Message sent!',
        description: `You have successfully sent a message to ${receiver?.username}`,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    } catch (e) {
      toast({
        title: 'Something went wrong!',
        description: 'Check logs or contact with your admin',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  const addingMessageModalProps: ModalProps = {
    mainButtonAction: onSendMessage,
    buttonSize: 'md',
    modalActionButtonText: 'Send',
    modalHeader: 'Send message to',
    buttonText: 'Send message',
    modalBody: <AddingMessageModalBodyComponent
      author={loggedUser.username || ''}
      users={USER_SELECT_VALUES}
      messageText={message.description}
      onMessageTextChange={onMessageTextChange}
      onReceiverChange={onReceiverChange}
    />,
  };

  console.log('MESSAGES', messages);

  const properMessages = filterUser === 'all'
    ? messages
    : messages.filter((filteredMessage) => filteredMessage.receiverUsername === filterUser);

  const messagesComponents = properMessages.map((messageType) => <SingleMessageComponent key={messageType.id} message={messageType} />);

  console.log('FILTERED', filterUser);

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
        value={filterUser}
      />
      <MessagesWrapperComponent>
        {messagesComponents}
      </MessagesWrapperComponent>

    </PageWrapperComponent>
  );
};

export default MessagesPageContainer;
