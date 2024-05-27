import styled from 'styled-components';
import IconWrapper from './components/iconWrapper.component.tsx';
import HeaderSystemTitleComponent from './components/headerSystemTitle.component.tsx';

const HeaderWrapper = styled.div`
    grid-area: header;
    background-color: var(--background-color);
    height: 150px;
    color: var(--nav-font-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainer = () => (
  <HeaderWrapper>
    <HeaderSystemTitleComponent />
    <IconWrapper />
  </HeaderWrapper>
);

export default HeaderContainer;
