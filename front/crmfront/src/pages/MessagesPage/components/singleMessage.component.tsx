import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, useToast,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { DeleteIcon } from '@chakra-ui/icons';
import { MessageType } from '../../../types/MessageType.ts';
import { mapDateToString } from '../../../utils/mappers/mapDateToString.ts';
import { RoleType, RoleTypeType } from '../../../types/UserType.ts';
import { useAppDispatch } from '../../../utils/hooks.ts';
import { ModalProps } from '../../../types/UtilTypes.ts';
import ModalComponent from '../../../components/modals/modal.component.tsx';
import { deleteMessageThunk } from '../../../store/messageSlice.tsx';

const StyledAccordion = styled(Accordion)`
  background-color: teal;
  color: #fff;
`;

const Authors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  gap: 5px;
`;

const SingleAuthor = styled.div`
  display: flex;
`;

const Header = styled(AccordionButton)`
  display: flex;
  justify-content: space-between;
`;

const DateWrapper = styled.div`
  display: flex;
`;

const Span = styled.span`
  font-weight: bold;
  width: 50px;
  display: block;
`;

const ModalWrapper = styled.div`
  padding: 10px 0;
  width: max-content;
  margin-left: auto;
  margin-right: 30px;
`;

interface Props {
  message: MessageType,
  loggedUserRole: RoleTypeType,
}

const SingleMessageComponent = ({ message, loggedUserRole }: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const deleteMessage = async () => {
    try {
      await dispatch(deleteMessageThunk(message.id));
      toast({
        title: 'Task preview edited!',
        description: 'You have successfully edited this task preview',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });
    } catch (e) {
      toast({
        title: 'Something went wrong',
        description: 'Contact with your admin',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const deletingMessageProps: ModalProps = {
    modalIcon: <DeleteIcon color="red.500" boxSize={6} />,
    buttonText: '',
    mainButtonAction: deleteMessage,
    buttonSize: 'md',
    modalActionButtonText: 'Delete',
    modalHeader: 'Delete message',
    modalBody: <h1>Are you sure you want to delete this message?</h1>,
  };

  return (
    <StyledAccordion allowToggle>
      {loggedUserRole === RoleType.ADMIN && (
      <ModalWrapper>
        <ModalComponent modalProps={deletingMessageProps} />
      </ModalWrapper>
      )}

      <AccordionItem>
        <Header>
          <Authors>
            <SingleAuthor>
              <Span>From:</Span> {message.authorName} {message.authorSurname} - {message.authorUsername}
            </SingleAuthor>
            <SingleAuthor>
              <Span>To:</Span> {message.receiverName} {message.receiverSurname} - {message.receiverUsername}
            </SingleAuthor>
          </Authors>

          <DateWrapper>
            <p>Date: {mapDateToString(message.date)}</p>
            <AccordionIcon />
          </DateWrapper>

        </Header>
        <AccordionPanel pb={4}>
          {message.text}
        </AccordionPanel>
      </AccordionItem>
    </StyledAccordion>
  );
};

export default SingleMessageComponent;
