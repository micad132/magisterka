import styled from 'styled-components';
import ChangeTheme from './changeTheme.component.tsx';
import ProfileModal from './profile/profileModal.component.tsx';
import SupportModal from './support/supportModal.component.tsx';
import AuthNavComponent from './authNav/authNav.component.tsx';
import { useAppSelector } from '../../../utils/hooks.ts';
import { getUserDetails } from '../../../store/userSlice.tsx';
import { ProfileModalUser } from '../../../types/UserType.ts';

const IconWrapperDiv = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  > * {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
`;

const AuthNav = styled.div`
  cursor: pointer;
  margin-top: 10px;
  font-size: 1.5rem;
`;

const IconWrapper = () => {
  const userDetails = useAppSelector(getUserDetails);

  const user: ProfileModalUser = {
    name: userDetails.name,
    surname: userDetails.surname,
    userRole: userDetails.userRole,
  };

  return (
    <IconWrapperDiv>
      <Icons>
        {userDetails.name !== '' && <ProfileModal user={user} />}
        <ChangeTheme />
        {userDetails.name !== '' && <SupportModal />}
      </Icons>
      <AuthNav>
        <AuthNavComponent isLogged={userDetails.name !== ''} />
      </AuthNav>
    </IconWrapperDiv>
  );
};

export default IconWrapper;
