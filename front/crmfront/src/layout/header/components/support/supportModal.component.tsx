// @ts-nocheck
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
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks.ts';
import { addingSupportRequestThunk } from '../../../../store/supportRequestSlice.tsx';
import { ActionType, AddHistory } from '../../../../types/HistoryType.ts';
import { getUserDetails } from '../../../../store/userSlice.tsx';
import { addHistoryThunk } from '../../../../store/historySlice.tsx';
import { sanitizeInput } from '../../../../utils/utilFunctions.ts';

const ModalBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SELECT_OPTIONS: SelectValue[] = [
  {
    text: 'Pomysł',
    value: SupportRequest.IMPROVEMENT,
  },
  {
    text: 'Problem',
    value: SupportRequest.BUG,
  },
  {
    text: 'Wsparcie',
    value: SupportRequest.SUPPORT,
  },
  {
    text: 'Inna',
    value: SupportRequest.OTHER,
  },
];

const properLabel = (label: SupportRequestType) => {
  switch (label) {
    case SupportRequest.IMPROVEMENT:
      return <p>Co powinniśmy poprawić?</p>;
    case SupportRequest.BUG:
      return <p>Co powinniśmy naprawić?</p>;
    case SupportRequest.SUPPORT:
      return <p>Jak ci możemy pomóc?</p>;
    case SupportRequest.OTHER:
      return <p>Przedstaw swój problem?</p>;
    default:
      return <p>ERROR</p>;
  }
};

const SupportModal = () => {
  const [supportText, setSupportText] = useState<string>('');
  const [supportCategory, setSupportCategory] = useState<SupportRequestType>(SupportRequest.IMPROVEMENT);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loggedUser = useAppSelector(getUserDetails);
  const toast = useToast();
  const dispatch = useAppDispatch();

  const setText = (value: string) => {
    setSupportText(sanitizeInput(value));
  };

  const onSaveClick = () => {
    const addObj: AddingSupport = {
      supportCategory,
      userId: loggedUser.id,
      description: supportText,
    };
    const historyObj: AddHistory = {
      performerId: loggedUser.id,
      historyActionType: ActionType.SUPPORT,
      description: `Zgłoszenie wsparcia z kategorią ${supportCategory} zostało utworzone przez ${loggedUser.username} - ${loggedUser.name} ${loggedUser.surname}`,
    };
    dispatch(addingSupportRequestThunk(addObj));
    dispatch(addHistoryThunk(historyObj));
    toast({
      title: 'Zgłoszenie wsparcia dodane!',
      description: 'Pomyślnie utworzyłeś zgłoszenie wsparcia',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <SupportIcon onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Coś nie tak?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalBodyWrapper>
              <SelectComponent options={SELECT_OPTIONS} onChange={setSupportCategory} label="Wybierz kategorię zgłoszenia wsparcia" />
              <TextareaCompononent
                label={properLabel(supportCategory)}
                onChange={setText}
                placeholder={supportCategory}
                value={supportText}
              />
            </ModalBodyWrapper>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Zamknij
            </Button>
            <Button colorScheme="teal" onClick={onSaveClick}>Utwórz</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SupportModal;
