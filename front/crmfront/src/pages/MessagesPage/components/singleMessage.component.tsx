import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { MessageType } from '../../../types/MessageType.ts';
import { mapDateToString } from '../../../utils/mappers/mapDateToString.ts';

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

interface Props {
  message: MessageType,
}

const SingleMessageComponent = ({ message }: Props) => (
  <StyledAccordion allowToggle>
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

export default SingleMessageComponent;
