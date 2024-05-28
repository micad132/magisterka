import styled from 'styled-components';
import { ReactNode } from 'react';

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-evenly;
`;

interface Props {
  children: ReactNode,
}

const RowInfoWrapperComponent = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default RowInfoWrapperComponent;
