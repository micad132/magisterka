import { Button } from '@chakra-ui/react';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const ButtonsFooterComponent = () => {
  console.log('jfdj');
  return (
    <ButtonsWrapper>
      <Button colorScheme="teal">Edit</Button>
      <Button colorScheme="red">Delete</Button>
    </ButtonsWrapper>
  );
};

export default ButtonsFooterComponent;
