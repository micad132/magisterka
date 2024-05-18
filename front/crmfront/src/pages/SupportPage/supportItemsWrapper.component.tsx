import { ReactNode } from 'react';
import styled from 'styled-components';

const SupportItemsWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

interface Props {
  children: ReactNode,
}

const SupportItemsWrapperComponent = ({ children }: Props) => (
  <SupportItemsWrapper>
    {children}
  </SupportItemsWrapper>
);

export default SupportItemsWrapperComponent;
