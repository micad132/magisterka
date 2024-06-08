import styled from 'styled-components';
import { ReactNode } from 'react';

const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

interface Props {
  children: ReactNode
}

const CountDivComponent = ({ children }: Props) => (
  <CountDiv>{children}</CountDiv>
);

export default CountDivComponent;
