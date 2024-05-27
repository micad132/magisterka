import { FormLabel, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

const TextInputWrapper = styled.div`
    margin: 10px 0;
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
  text-align: left;
  margin-top: 5px;
`;

interface Props {
  name: string,
  value: string | number,
  onChange: (value: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  label: string,
  type: string,
  isInvalid: boolean,
  error?: string,
}

const InputComponent = ({
  name, placeholder, value, onChange, label, type, isInvalid, error,
}: Props) => (
  <TextInputWrapper>
    <FormLabel>{label}</FormLabel>
    <Input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isInvalid={isInvalid}
      type={type}
      sx={{
        '::placeholder': {
          color: 'white',
          fontWeight: '200',
        },
      }}
    />
    {error && <Error>{error}</Error>}
  </TextInputWrapper>
);

export default InputComponent;
