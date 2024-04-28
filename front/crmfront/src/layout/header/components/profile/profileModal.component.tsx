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
import ProfileComponent from './profile.component.tsx';
import RoleTag from '../../../../components/roleTag.component.tsx';
import { RoleType } from '../../../../types/UserType.ts';

const ProfileModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <ModalHeader>Michal Mosiolek</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RoleTag role={RoleType.WORKER} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Visit profile</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
