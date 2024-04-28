import styled from 'styled-components';
import { ReactNode } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

interface Props {
  children: ReactNode,
}

const PeopleWrapperComponent = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default PeopleWrapperComponent;
