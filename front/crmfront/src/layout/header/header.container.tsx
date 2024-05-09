import styled from 'styled-components';
import IconWrapper from './components/iconWrapper.component.tsx';
import AuthNavComponent from './components/authNav/authNav.component.tsx';

const HeaderWrapper = styled.div`
    grid-area: header;
    background-color: var(--background-color);
    height: 150px;
    color: var(--nav-font-color);
`;

const HeaderContainer = () => (
  <HeaderWrapper>
    <h1>header</h1>
    <IconWrapper />
  </HeaderWrapper>
);

export default HeaderContainer;
