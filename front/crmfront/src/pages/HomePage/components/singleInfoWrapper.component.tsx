import { ReactNode } from 'react';
import styled from 'styled-components';

const SingleInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

interface Props {
  children: ReactNode,
}

const SingleInfoWrapperComponent = ({ children }: Props) => (
  <SingleInfoWrapper>
    {children}
  </SingleInfoWrapper>
);

export default SingleInfoWrapperComponent;
