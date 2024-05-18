import styled from 'styled-components';
import SendingMessageAuthorComponent from './sendingMessageAuthor.component.tsx';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import TextareaComponent from '../../../../components/form/textarea.component.tsx';

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Props {
  author: string,
  users: SelectValue[],
  messageText: string,
  onMessageTextChange: (value: string) => void,
  onReceiverChange: (value: string) => void,
}

const AddingMessageModalBodyComponent = ({
  author, users, messageText, onMessageTextChange, onReceiverChange,
}: Props) => {
  const c = 4;
  return (
    <Wrapper>
      <SendingMessageAuthorComponent author={author} />
      <SelectComponent
        options={users}
        onChange={onReceiverChange}
        label="Select receiver"
      />
      <TextareaComponent
        placeholder="Message text"
        value={messageText}
        onChange={onMessageTextChange}
        label="Message text"
      />
    </Wrapper>
  );
};

export default AddingMessageModalBodyComponent;
