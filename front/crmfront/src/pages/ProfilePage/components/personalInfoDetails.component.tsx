import styled from 'styled-components';
import PersonalInfoLabelComponent from './personalInfoLabel.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import EditUserDataComponent from './editUserData.component.tsx';
import { LoggedUserDetails } from '../../../types/UserType.ts';

const PersonalInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid black;
`;

const PersonalInfoDetails = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  modalProps: ModalProps,
  userDetails: LoggedUserDetails,
}

const PersonalInfoDetailsComponent = ({ modalProps, userDetails }: Props) => (
  <PersonalInfoWrapper>
    <EditUserDataComponent modalProps={modalProps} />
    <PersonalInfoDetails>
      <PersonalInfoLabelComponent label="Imię" text={userDetails.name} />
      <PersonalInfoLabelComponent label="Nazwisko" text={userDetails.surname} />
      <PersonalInfoLabelComponent label="Płeć" text={userDetails.userGender} />
      <PersonalInfoLabelComponent label="Email" text={userDetails.email} />
      <PersonalInfoLabelComponent label="Wiek" text={userDetails.age} />
      <PersonalInfoLabelComponent label="Województwo" text={userDetails.provinceName} />
      <PersonalInfoLabelComponent label="Nazwa miasta" text={userDetails.cityName} />
      <PersonalInfoLabelComponent label="Nazwa ulicy" text={userDetails.streetName} />
      <PersonalInfoLabelComponent label="Kod pocztowy" text={userDetails.postalCode} />
      <PersonalInfoLabelComponent label="Numer telefonu" text={userDetails.phoneNumber} />
    </PersonalInfoDetails>
  </PersonalInfoWrapper>
);

export default PersonalInfoDetailsComponent;
