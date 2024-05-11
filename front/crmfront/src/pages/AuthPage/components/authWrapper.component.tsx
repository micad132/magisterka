import styled from 'styled-components';
import { ReactNode } from 'react';

const Wrapper = styled.div`
  background-color: var(--background-color);
  padding: 10px;
  border-radius: 10px;
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface Props {
  children: ReactNode,
}

const AuthWrapper = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default AuthWrapper;
