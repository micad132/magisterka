import styled from 'styled-components';
import PersonalInfoLabelComponent from './personalInfoLabel.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';
import EditUserDataComponent from './editUserData.component.tsx';

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
}

const PersonalInfoDetailsComponent = ({ modalProps }: Props) => (
  <PersonalInfoWrapper>
    <EditUserDataComponent modalProps={modalProps} />
    <PersonalInfoDetails>
      <PersonalInfoLabelComponent label="Name" text="Michal" />
      <PersonalInfoLabelComponent label="Surname" text="Mosiolek" />
      <PersonalInfoLabelComponent label="Age" text="24" />
      <PersonalInfoLabelComponent label="Country name" text="Poland" />
      <PersonalInfoLabelComponent label="City name" text="Kielce" />
      <PersonalInfoLabelComponent label="Street name" text="Leszczynska" />
      <PersonalInfoLabelComponent label="Postal code" text="12-453" />
      <PersonalInfoLabelComponent label="Phone number" text="123456789" />
    </PersonalInfoDetails>
  </PersonalInfoWrapper>
);

export default PersonalInfoDetailsComponent;
