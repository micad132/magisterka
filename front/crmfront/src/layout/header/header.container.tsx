import styled from 'styled-components';
import ChangeTheme from './components/changeTheme.component.tsx';

const HeaderWrapper = styled.div`
    grid-area: header;
    background-color: #fff;
    height: 150px;
`;

const HeaderContainer = () => (
  <HeaderWrapper>
    <h1>header</h1>
    <ChangeTheme />
  </HeaderWrapper>
);

export default HeaderContainer;
