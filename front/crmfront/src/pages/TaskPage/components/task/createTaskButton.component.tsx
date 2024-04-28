import { Button } from '@chakra-ui/react';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  margin-top: 20px;
`;

const CreateTaskButton = () => (
  <CustomButton colorScheme="teal" size="lg">
    Create task
  </CustomButton>
);

export default CreateTaskButton;
