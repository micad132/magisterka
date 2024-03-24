import styled from 'styled-components';
import SingleLink from './singleLink.component.tsx';

const NavWrapper = styled.nav`
    grid-area: nav;
    height: 100vh;
    //background-color: #fff;
    background-color: var(--test-color);
    color: #000;  
`;

const NavComponent = () => (
  <NavWrapper>
    <h1>NAV</h1>
    <SingleLink path="/test" text="Test" />
  </NavWrapper>
);

export default NavComponent;
