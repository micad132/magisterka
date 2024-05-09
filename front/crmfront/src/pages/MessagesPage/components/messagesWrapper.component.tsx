import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: chocolate;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 1200px;
    margin: 20px auto;
`;

interface Props {
  children: ReactNode,
}

const MessagesWrapperComponent = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>

);

export default MessagesWrapperComponent;
