import { ReactNode } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  margin: 20px auto;
  width: 90%;
  max-width: 1800px;
  color: var(--font-color);
`;

interface Props {
  children: ReactNode,
}

const PageWrapperComponent = ({ children }: Props) => (
  <PageWrapper>{children}</PageWrapper>
);

export default PageWrapperComponent;
