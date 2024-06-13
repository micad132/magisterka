import styled from 'styled-components';
import { ReactNode } from 'react';

const Wrapper = styled.div`
background-color: darkcyan;
  
`;

interface Props {
  children: ReactNode,
}

const InfoCountWrapperComponent = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default InfoCountWrapperComponent;
