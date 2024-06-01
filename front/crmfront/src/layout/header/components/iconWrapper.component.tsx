import styled from 'styled-components';
import ChangeTheme from './changeTheme.component.tsx';
import ProfileModal from './profile/profileModal.component.tsx';
import SupportModal from './support/supportModal.component.tsx';
import AuthNavComponent from './authNav/authNav.component.tsx';
import { useAppSelector } from '../../../utils/hooks.ts';
import { getUserDetails } from '../../../store/userSlice.tsx';
import { ProfileModalUser, RoleType } from '../../../types/UserType.ts';
import SurveyModalComponent from './survey/surveyModal.component.tsx';

const IconWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
  margin-right: 5rem;
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

  const isLoggedClient = userDetails.userRole === RoleType.CLIENT && userDetails.name !== '';

  return (
    <IconWrapperDiv>
      <Icons>
        {userDetails.name !== '' && <ProfileModal user={user} />}
        <ChangeTheme />
        {isLoggedClient && <SupportModal />}
        {isLoggedClient && <SurveyModalComponent />}
      </Icons>
      <AuthNav>
        <AuthNavComponent isLogged={userDetails.name !== ''} />
      </AuthNav>
    </IconWrapperDiv>
  );
};

export default IconWrapper;
