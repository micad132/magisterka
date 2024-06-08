import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

interface Props {
  children: ReactNode,
}

const CommentsWrapperComponent = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default CommentsWrapperComponent;
