import { FormLabel, PinInput, PinInputField } from '@chakra-ui/react';
import styled from 'styled-components';

const PinWrapper = styled.div`
  //background-color: red;
`;

const Test = styled.div`
  display: flex;
  gap: 5px;
`;

interface Props {
  value: string,
  setValue: (value: string) => void,
  label: string,
}

const PinInputComponent = ({ value, setValue, label }: Props) => (
  <PinWrapper>
    <FormLabel>{label}</FormLabel>
    <Test>
      <PinInput value={value} onChange={setValue}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Test>

  </PinWrapper>

);

export default PinInputComponent;
