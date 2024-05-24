import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure, useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import styled from 'styled-components';
import SupportIcon from './supportIcon.component.tsx';
import SelectComponent from '../../../../components/form/select.component.tsx';
import { SelectValue } from '../../../../types/UtilTypes.ts';
import TextareaCompononent from '../../../../components/form/textarea.component.tsx';
import { AddingSupport, SupportRequest, SupportRequestType } from '../../../../types/SupportRequest.ts';
import { useAppDispatch } from '../../../../utils/hooks.ts';
import { addingSupportRequestThunk } from '../../../../store/supportRequestSlice.tsx';

const ModalBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SELECT_OPTIONS: SelectValue[] = [
  {
    text: 'Improvement',
    value: SupportRequest.IMPROVEMENT,
  },
  {
    text: 'Bug',
    value: SupportRequest.BUG,
  },
  {
    text: 'Support',
    value: SupportRequest.SUPPORT,
  },
  {
    text: 'Other',
    value: SupportRequest.OTHER,
  },
];

const properLabel = (label: SupportRequestType) => {
  switch (label) {
    case SupportRequest.IMPROVEMENT:
      return <p>What should we improve?</p>;
    case SupportRequest.BUG:
      return <p>What should we fix?</p>;
    case SupportRequest.SUPPORT:
      return <p>How can we help you?</p>;
    case SupportRequest.OTHER:
      return <p>What is on your mind?</p>;
    default:
      return <p>ERROR</p>;
  }
};

const SupportModal = () => {
  const [supportText, setSupportText] = useState<string>('');
  const [supportCategory, setSupportCategory] = useState<SupportRequestType>(SupportRequest.IMPROVEMENT);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useAppDispatch();

  const onSaveClick = () => {
    const addObj: AddingSupport = {
      supportCategory,
      userId: 2,
      description: supportText,
    };
    dispatch(addingSupportRequestThunk(addObj));
    toast({
      title: 'Support request sent!',
      description: 'You have successfully created support request',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <SupportIcon onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something wrong?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalBodyWrapper>
              <p>Select support category</p>
              <SelectComponent options={SELECT_OPTIONS} onChange={setSupportCategory} label="Select support category" />
              <TextareaCompononent
                label={properLabel(supportCategory)}
                onChange={setSupportText}
                placeholder={supportCategory}
                value={supportText}
              />
            </ModalBodyWrapper>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="teal" onClick={onSaveClick}>Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SupportModal;
