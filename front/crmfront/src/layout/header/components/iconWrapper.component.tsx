import styled from 'styled-components';
import ProfileComponent from './profile/profile.component.tsx';
import ChangeTheme from './changeTheme.component.tsx';
import ProfileModal from './profile/profileModal.component.tsx';
import SupportModal from './support/supportModal.component.tsx';

const IconWrapperDiv = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  
  > * {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  
`;

const IconWrapper = () => (
  <IconWrapperDiv>
    <ProfileModal />
    <ChangeTheme />
    <SupportModal />
  </IconWrapperDiv>
);

export default IconWrapper;
