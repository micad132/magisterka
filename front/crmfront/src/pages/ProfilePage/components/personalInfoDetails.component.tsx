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
      <PersonalInfoLabelComponent label="Name" text={userDetails.name} />
      <PersonalInfoLabelComponent label="Surname" text={userDetails.surname} />
      <PersonalInfoLabelComponent label="Email" text={userDetails.email} />
      <PersonalInfoLabelComponent label="Age" text={userDetails.age} />
      <PersonalInfoLabelComponent label="Country name" text={userDetails.countryName} />
      <PersonalInfoLabelComponent label="City name" text={userDetails.cityName} />
      <PersonalInfoLabelComponent label="Street name" text={userDetails.streetName} />
      <PersonalInfoLabelComponent label="Postal code" text={userDetails.postalCode} />
      <PersonalInfoLabelComponent label="Phone number" text={userDetails.phoneNumber} />
    </PersonalInfoDetails>
  </PersonalInfoWrapper>
);

export default PersonalInfoDetailsComponent;
