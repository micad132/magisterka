import { Input, Select, Textarea } from '@chakra-ui/react';
import styled from 'styled-components';
import TextareaComponent from '../../../../components/form/textarea.component.tsx';

const CreatingTaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CreatingTaskModalContent = () => {
  console.log('gfd');
  return (
    <CreatingTaskWrapper>
      <Input placeholder="Test" />
      <Select placeholder="Service type">
        <option value="logistic">Logistic</option>
        <option value="informatic">Informatic</option>
        <option value="purchase">Purchase</option>
      </Select>
      <Select placeholder="Initial priority">
        <option value="minor">Minor</option>
        <option value="major">Major</option>
        <option value="critical">Critical</option>
      </Select>
      <Select placeholder="Initial status">
        <option value="inprogress">In progress</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
      </Select>
      <TextareaComponent placeholder="Task description" value="" onChange={() => {}} label="Task description" />
      <Input placeholder="Estimated cost" />
    </CreatingTaskWrapper>
  );
};

export default CreatingTaskModalContent;
