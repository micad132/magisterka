import { Button } from '@chakra-ui/react';
import styled from 'styled-components';
import ModalComponent from '../../../../components/modal.component.tsx';
import { ModalProps } from '../../../../types/UtilTypes.ts';
import EditUserContentComponent from './editUserContent.component.tsx';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const ButtonsFooterComponent = () => {
  console.log('jfdj');

  const editPersonModalContent: ModalProps = {
    modalHeader: 'Edit person',
    buttonText: 'Edit',
    modalActionButtonText: 'Edit',
    modalBody: <EditUserContentComponent />,
    buttonSize: 'md',
  };

  const deletePersonModalContent: ModalProps = {
    modalHeader: 'Delete person',
    buttonText: 'Delete',
    modalActionButtonText: 'Delete',
    modalBody: <h1>Are you sure to want to delete?</h1>,
    buttonColor: 'red',
    buttonSize: 'md',
  };

  return (
    <ButtonsWrapper>
      <ModalComponent
        modalProps={editPersonModalContent}
      />
      <ModalComponent
        modalProps={deletePersonModalContent}
      />
    </ButtonsWrapper>
  );
};

export default ButtonsFooterComponent;
