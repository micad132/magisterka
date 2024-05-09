import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { MessageType } from '../../../types/MessageType.ts';

const StyledHeader = styled.h2`
  display: flex;
  
`;

interface Props {
  message: MessageType,
}

const SingleMessageComponent = ({ message }: Props) => (
  <Accordion allowToggle>
    <AccordionItem>
      <StyledHeader>
        <AccordionButton>
          <div>
            From: {message.author}
          </div>
          <div>
            To: {message.receiver}
          </div>
          <AccordionIcon />
        </AccordionButton>
      </StyledHeader>
      <AccordionPanel pb={4}>
        {message.description}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default SingleMessageComponent;
