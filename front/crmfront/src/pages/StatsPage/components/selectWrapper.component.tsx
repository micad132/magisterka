import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: 500px;
`;

interface Props {
  children: ReactNode,
}

const SelectWrapperComponent = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default SelectWrapperComponent;
