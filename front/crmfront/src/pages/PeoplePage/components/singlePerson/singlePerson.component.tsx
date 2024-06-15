import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
} from '@chakra-ui/react';
import styled from 'styled-components';
import RoleTagComponent from '../../../../components/roleTag.component.tsx';
import {
  RoleType, RoleTypeType, User, UserGender, UserGenderType,
} from '../../../../types/UserType.ts';
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

const mapGender = (gender: UserGenderType) => {
  if (gender === UserGender.MAN) {
    return 'Mężczyzna';
  } if (gender === UserGender.WOMAN) {
    return 'Kobieta';
  }
  return '';
};

const mapRole = (role: RoleTypeType) => {
  if (role === RoleType.WORKER) {
    return 'Pracownik';
  } if (role === RoleType.ADMIN) {
    return 'Admin';
  } if (role === RoleType.CLIENT) {
    return 'Klient';
  }
};

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
          label="Imię"
          text={user.name}
        />
        <SinglePersonInfoComponent
          label="Nazwisko"
          text={user.surname}
        />
        <SinglePersonInfoComponent
          label="Wiek"
          text={String(user.age)}
        />
        <SinglePersonInfoComponent
          label="Płeć"
          text={mapGender(user.userGender)}
        />
        <SinglePersonInfoComponent
          label="Rola"
          text={mapRole(user.userRole)}
        />
        <SinglePersonInfoComponent
          label="Województwo"
          text={user.provinceName}
        />
        <SinglePersonInfoComponent
          label="Ulica"
          text={user.streetName}
        />
        <SinglePersonInfoComponent
          label="Kod pocztowy"
          text={user.postalCode}
        />
        <SinglePersonInfoComponent
          label="Numer telefonu"
          text={user.phoneNumber}
        />
        <SinglePersonInfoComponent
          label="Pesel"
          text={user.pesel}
        />
        {user.userRole !== RoleType.ADMIN && <ButtonsFooterComponent userId={user.id} user={user} />}
      </AccordionPanel>
    </AccordionItem>
  </StyledAccordion>
);

export default SinglePersonComponent;
