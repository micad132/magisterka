import { useState } from 'react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import SingleMessageComponent from './components/singleMessage.component.tsx';
import MessagesCountComponent from './components/messagesCount.component.tsx';
import MessagesWrapperComponent from './components/messagesWrapper.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';
import SelectReceiverComponent from './components/selectReceiver.component.tsx';
import { MessageType } from '../../types/MessageType.ts';
import { useAppSelector } from '../../utils/hooks.ts';
import { getAllUsers } from '../../store/userSlice.tsx';

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

  const users = useAppSelector(getAllUsers);

  const USER_SELECT_VALUES: SelectValue[] = users.map((user) => ({
    text: user.username,
    value: user.username,
  }));

  const messages = MOCKED_MESSAGES.map((message) => <SingleMessageComponent key={message.author} message={message} />);

  return (
    <PageWrapperComponent>
      MESSAGES
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
