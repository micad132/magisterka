import { ReactNode } from 'react';
import styled from 'styled-components';

const BadRouteWrapper = styled.div`
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

interface Props {
  children: ReactNode,
}

const BadRouteWrapperComponent = ({ children }: Props) => (
  <BadRouteWrapper>
    {children}
  </BadRouteWrapper>
);

export default BadRouteWrapperComponent;
