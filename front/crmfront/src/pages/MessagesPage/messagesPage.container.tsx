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
} from '../../types/MessageType.ts';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers, getUserDetails } from '../../store/userSlice.tsx';
import ModalComponent from '../../components/modals/modal.component.tsx';
import AddingMessageModalBodyComponent from './components/addingMessage/addingMessageModalBody.component.tsx';
import PageHeaderComponent from '../../components/pageHeader.component.tsx';
import { addingMessageThunk, getAllMessages } from '../../store/messageSlice.tsx';
import RoleTag from '../../components/roleTag.component.tsx';
import { RoleType } from '../../types/UserType.ts';
import { ActionType, AddHistory } from '../../types/HistoryType.ts';
import { addHistoryThunk } from '../../store/historySlice.tsx';
import MessageComponent from '../../components/message.component.tsx';
import { sanitizeInput } from '../../utils/utilFunctions.ts';

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
      description: sanitizeInput(value),
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
    const receiver = users.find((user) => user.username === message.receiver);
    const obj: AddingMessage = {
      text: message.description,
      receiverId: receiver?.id ?? 0,
      authorId: loggedUser.id,
    };
    const historyObj: AddHistory = {
      historyActionType: ActionType.MESSAGE,
      performerId: loggedUser.id,
      description: `Message sent from ${loggedUser.username} to ${receiver?.username}`,
    };
    try {
      dispatch(addingMessageThunk(obj));
      dispatch(addHistoryThunk(historyObj));
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

  const properMessages = loggedUser.userRole === RoleType.ADMIN
    ? messages
    : messages.filter((msg) => msg.authorUsername === loggedUser.username || msg.receiverUsername === loggedUser.username);

  const filteredMessages = filterUser === 'all'
    ? properMessages
    : properMessages.filter((filteredMessage) => filteredMessage.receiverUsername === filterUser);

  const messagesComponents = filteredMessages.map((messageType) => <SingleMessageComponent key={messageType.id} message={messageType} />);

  console.log('FILTERED', filterUser);

  if (messages.length === 0) {
    return (
      <PageWrapperComponent>
        <ModalComponent
          modalProps={addingMessageModalProps}
        />
        <MessageComponent message="There are no messages in the system" />
      </PageWrapperComponent>
    );
  }

  return (
    <PageWrapperComponent>
      <PageHeaderComponent text="Messages" />
      <ModalComponent
        modalProps={addingMessageModalProps}
      />
      <MessagesCountComponent count={messages.length} isAdmin={loggedUser.userRole === RoleType.ADMIN} />
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
