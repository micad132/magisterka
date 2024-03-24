import { ReactNode } from 'react';
import styled from 'styled-components';
import NavComponent from './nav/components/nav.component.tsx';
import HeaderContainer from './header/header.container.tsx';

const MainWrapper = styled.main`
  grid-area: main;
  background-color: #201E1F;
  height: 100%;
`;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: min(20%, 200px) 1fr;
  column-gap: 10px;
  grid-template-rows: auto 1fr;
  grid-template-areas:
  "nav header"
  "nav main";
`;

interface Props {
  children: ReactNode,
}

const LayoutContainer = ({ children }: Props) => (
  <LayoutWrapper>
    <NavComponent />
    <HeaderContainer />
    <MainWrapper>
      {children}
    </MainWrapper>
  </LayoutWrapper>
);

export default LayoutContainer;
