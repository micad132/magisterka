import { useState } from 'react';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import SingleMessageComponent from './components/singleMessage.component.tsx';
import MessagesCountComponent from './components/messagesCount.component.tsx';
import MessagesWrapperComponent from './components/messagesWrapper.component.tsx';
import { SelectValue } from '../../types/UtilTypes.ts';
import { MockedUsers } from '../../mock/mockUsers.tsx';
import SelectReceiverComponent from './components/selectReceiver.component.tsx';
import { MessageType } from '../../types/MessageType.ts';

const USER_SELECT_VALUES: SelectValue[] = MockedUsers.map((user) => ({
  text: user.username,
  value: user.username,
}));

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
  console.log('fjdjfd');
  const [filterUser, setFilterUser] = useState<string>('');

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
