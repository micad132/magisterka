import styled from 'styled-components';
import ModalComponent from '../../../components/modal.component.tsx';
import { ModalProps } from '../../../types/UtilTypes.ts';

const ModalWrapper = styled.div`
  flex-grow: 0;
  align-self: flex-end;
  width: 100px;
`;

interface Props {
  modalProps: ModalProps,
}

const EditUserDataComponent = ({ modalProps }: Props) => (
  <ModalWrapper>
    <ModalComponent modalProps={modalProps} />
  </ModalWrapper>
);

export default EditUserDataComponent;
