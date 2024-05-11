import { FormLabel, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

const TextInputWrapper = styled.div`
    margin: 10px 0;
`;

interface Props {
  name: string,
  value: string | number,
  onChange: (value: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  label: string,
  type: string,
}

const InputComponent = ({
  name, placeholder, value, onChange, label, type,
}: Props) => (
  <TextInputWrapper>
    <FormLabel>{label}</FormLabel>
    <Input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      sx={{
        '::placeholder': {
          color: 'white',
          fontWeight: '200',
        },
      }}
    />
  </TextInputWrapper>
);

export default InputComponent;
