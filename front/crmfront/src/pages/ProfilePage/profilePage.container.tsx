import styled from 'styled-components';
import LoggedUserDetailsComponent from './components/loggedUserDetails.component.tsx';
import PersonalInfoDetailsComponent from './components/personalInfoDetails.component.tsx';
import { ModalProps } from '../../types/UtilTypes.ts';
import StatsWrapperComponent from './components/stats/statsWrapper.component.tsx';
import EditUserDataModalContentComponent from './components/editUserDataModalContent.component.tsx';

const ProfilePageWrapper = styled.div`
  margin: 20px auto;
  width: 70%;
  max-width: 1200px;
  color: #000;
`;

const ProfilePageContainer = () => {
  console.log('djjdd');

  const editUserModal: ModalProps = {
    modalHeader: 'Edit your data',
    buttonText: 'Edit',
    buttonSize: 'md',
    modalActionButtonText: 'Edit',
    mainButtonAction: () => {},
    modalBody: <EditUserDataModalContentComponent />,
  };

  return (
    <ProfilePageWrapper>
      <LoggedUserDetailsComponent />
      <PersonalInfoDetailsComponent modalProps={editUserModal} />
      <StatsWrapperComponent />
    </ProfilePageWrapper>
  );
};

export default ProfilePageContainer;
