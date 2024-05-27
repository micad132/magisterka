import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
} from '@chakra-ui/react';
import styled from 'styled-components';
import RoleTagComponent from '../../../../components/roleTag.component.tsx';
import { User } from '../../../../types/UserType.ts';
import ButtonsFooterComponent from './buttonsFooter.component.tsx';
import SinglePersonInfoComponent from './singlePersonInfo.component.tsx';

const StyledAccordion = styled(Accordion)`
  width: 400px;
  margin-left: 20px;
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
  user: User,
}

const SinglePersonComponent = ({ user }: Props) => (

  <StyledAccordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <AccordionHeader>
            <p>{user.username}</p>
            <RoleTagComponent role={user.userRole} />
          </AccordionHeader>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <SinglePersonInfoComponent
          label="Name"
          text={user.name}
        />
        <SinglePersonInfoComponent
          label="Surname"
          text={user.surname}
        />
        <SinglePersonInfoComponent
          label="Age"
          text={String(user.age)}
        />
        <SinglePersonInfoComponent
          label="Gender"
          text={user.userGender}
        />
        <SinglePersonInfoComponent
          label="Role"
          text={user.userRole}
        />
        <SinglePersonInfoComponent
          label="Country name"
          text={user.countryName}
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
          label="Phone number"
          text={user.phoneNumber}
        />
        <SinglePersonInfoComponent
          label="Pesel"
          text={user.pesel}
        />
        <ButtonsFooterComponent userId={user.id} />
      </AccordionPanel>
    </AccordionItem>
  </StyledAccordion>
);

export default SinglePersonComponent;
