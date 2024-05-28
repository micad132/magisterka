import styled from 'styled-components';
import IconWrapper from './components/iconWrapper.component.tsx';
import HeaderSystemTitleComponent from './components/headerSystemTitle.component.tsx';
import LoggedUserHeaderComponent from './components/loggedUserHeader/loggedUserHeader.component.tsx';
import { useAppSelector } from '../../utils/hooks.ts';
import { getUserDetails } from '../../store/userSlice.tsx';

const HeaderWrapper = styled.div`
    grid-area: header;
    background-color: var(--background-color);
    height: 150px;
    color: var(--nav-font-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
`;

const HeaderContainer = () => {
  const loggedUser = useAppSelector(getUserDetails);
  return (
    <HeaderWrapper>
      <HeaderSystemTitleComponent />
      {loggedUser.username !== '' && <LoggedUserHeaderComponent loggedUser={loggedUser} /> }
      <IconWrapper />
    </HeaderWrapper>
  );
};

export default HeaderContainer;
