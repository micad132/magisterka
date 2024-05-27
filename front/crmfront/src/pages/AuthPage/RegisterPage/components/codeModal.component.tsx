import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import styled from 'styled-components';

const IMG = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

interface Props {
  isOpen: boolean,
  onClose: () => void,
  qrURL: string,
}

const CodeModalComponent = ({
  isOpen, onClose, qrURL,
}: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Scan this QR Code</ModalHeader>
      <ModalBody>
        <IMG src={qrURL} alt="2FA URL TO SCAN" />
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default CodeModalComponent;
