import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotLoggedWrapper = styled.div`
  background-color: red;
  color: #fff;
  margin: 50px auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-weight: bold;
  border-radius: 10px;
  
  Button {
    width: 70%;
    max-width: 100px;
  }
`;

const NotLoggedComponent = () => {
  const navigate = useNavigate();
  return (
    <NotLoggedWrapper>
      <p>You are not logged into the system</p>
      <Button onClick={() => navigate('/login', { replace: true })}>LOGIN</Button>
    </NotLoggedWrapper>
  );
};

export default NotLoggedComponent;
