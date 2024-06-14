import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from './profile.component.tsx';
import RoleTag from '../../../../components/roleTag.component.tsx';
import { ProfileModalUser } from '../../../../types/UserType.ts';
import ProfileModalMessageComponent from './profileModalMessage.component.tsx';

const ProfileModalHeader = styled.div`
  display: flex;
  gap: 10px;
`;

interface Props {
  user: ProfileModalUser,
}

const ProfileModal = ({ user }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <ProfileComponent onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{
          position: 'absolute',
          top: '20px', // Ustaw odpowiednią wartość odstępu od góry
          right: '20px', // Ustaw odpowiednią wartość odstępu od prawej
        }}
        >
          <ModalHeader>
            <ProfileModalHeader>
              {user.name} {user.surname}  <RoleTag role={user.userRole} />
            </ProfileModalHeader>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProfileModalMessageComponent />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" colorScheme="blue" mr={3} onClick={onClose}>
              Zamknij
            </Button>
            <Button
              colorScheme="teal"
              onClick={() => {
                onClose();
                navigate('/profile', { replace: true });
              }}
            >Profil konta
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
