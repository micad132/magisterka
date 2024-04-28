import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,
} from '@chakra-ui/react';
import styled from 'styled-components';
import RoleTagComponent from '../../../../components/roleTag.component.tsx';
import { RoleType, UserWithoutID } from '../../../../types/UserType.ts';
import ButtonsFooterComponent from './buttonsFooter.component.tsx';
import SinglePersonInfoComponent from './singlePersonInfo.component.tsx';

const StyledAccordion = styled(Accordion)`
  width: 400px;
  margin-left: 20px;
  //border: 2px solid var(--background-color);
  //background-color: chocolate;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  
  p{
    font-weight: bold;
  }
`;

interface Props {
  user: UserWithoutID,
}

const SinglePersonComponent = ({ user }: Props) => (

  <StyledAccordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <AccordionHeader>
            <p>{user.username}</p>
            <RoleTagComponent role={user.role} />
          </AccordionHeader>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <SinglePersonInfoComponent
          label="Email"
          text={user.email}
        />
        <SinglePersonInfoComponent
          label="Street"
          text={user.streetName}
        />
        <SinglePersonInfoComponent
          label="Postal code"
          text={user.postalCode}
        />
        <SinglePersonInfoComponent
          label="phone number"
          text={user.phoneNumber}
        />
        <ButtonsFooterComponent />
      </AccordionPanel>
    </AccordionItem>
  </StyledAccordion>
);

export default SinglePersonComponent;
