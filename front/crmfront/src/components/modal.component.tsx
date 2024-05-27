import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure, Button,
} from '@chakra-ui/react';
import {
  cloneElement, isValidElement, ReactElement, ReactNode,
} from 'react';
import { ModalProps } from '../types/UtilTypes.ts';

interface Props {
  modalProps: ModalProps,
}

const ModalComponent = ({ modalProps }:Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalEntry: ReactNode = isValidElement(modalProps.modalIcon)
    ? cloneElement(modalProps.modalIcon as ReactElement, { onClick: onOpen, style: { cursor: 'pointer' } })
    : (
      <Button
        onClick={onOpen}
        colorScheme={modalProps.buttonColor ?? 'teal'}
        size={modalProps.buttonSize ?? 'lg'}
      >
        {modalProps.buttonText}
      </Button>
    );

  return (
    <>
      {/* <Button onClick={onOpen} colorScheme={modalProps.buttonColor ?? 'teal'} size={modalProps.buttonSize ?? 'lg'}>{modalProps.buttonText}</Button> */}
      {modalEntry}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalProps.modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalProps.modalBody}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={modalProps.mainButtonAction}>
              {modalProps.modalActionButtonText}
            </Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
