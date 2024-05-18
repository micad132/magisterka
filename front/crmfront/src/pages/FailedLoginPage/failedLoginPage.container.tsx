import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const FailedLoginPageWrapper = styled.div`
  color: var(--font-color);
  margin: 20px auto;
  width: 70%;
  max-width: 1000px;
  
  p {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  Button {
    padding: 1.2rem;
    font-size: 1.2rem;
  }
`;

const FailedLoginPageContainer = () => {
  const navigate = useNavigate();
  return (
    <FailedLoginPageWrapper>
      <p>Your login attempt failed</p>

      <Button colorScheme="teal" onClick={() => navigate('/login', { replace: true })}>TRY AGAIN?</Button>
    </FailedLoginPageWrapper>
  );
};

export default FailedLoginPageContainer;
