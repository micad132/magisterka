import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

const PhoneInput = () => (
  <InputGroup>
    <InputLeftAddon>+48</InputLeftAddon>
    <Input type="tel" placeholder="phone number" />
  </InputGroup>
);

export default PhoneInput;
