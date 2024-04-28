import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
  
  Button {
    width: 300px;
    margin: 10px 0;
    color: #000;
  }
  
`;

interface Props {
  children: ReactNode,
}

const AuthWrapperInside = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default AuthWrapperInside;
