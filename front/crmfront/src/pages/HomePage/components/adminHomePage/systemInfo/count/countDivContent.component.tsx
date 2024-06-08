import { ReactNode } from 'react';
import styled from 'styled-components';

const CountDivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

interface Props {
  children: ReactNode,
}

const CountDivContentComponent = ({ children }: Props) => (
  <CountDivContent>
    {children}
  </CountDivContent>
);

export default CountDivContentComponent;
