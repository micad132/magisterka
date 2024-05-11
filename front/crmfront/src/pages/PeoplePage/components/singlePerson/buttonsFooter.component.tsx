import styled from 'styled-components';
import { useToast } from '@chakra-ui/react';
import ModalComponent from '../../../../components/modal.component.tsx';
import { ModalProps } from '../../../../types/UtilTypes.ts';
import EditUserContentComponent from './editUserContent.component.tsx';
import { useAppDispatch } from '../../../../utils/hooks.ts';
import { deleteUserThunk } from '../../../../store/userSlice.tsx';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

interface Props {
  userId: number,
}

const ButtonsFooterComponent = ({ userId }: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const editPersonModalContent: ModalProps = {
    modalHeader: 'Edit person',
    buttonText: 'Edit',
    modalActionButtonText: 'Edit',
    modalBody: <EditUserContentComponent />,
    buttonSize: 'md',
    mainButtonAction: () => {},
  };

  const deletePersonModalContent: ModalProps = {
    modalHeader: 'Delete person',
    buttonText: 'Delete',
    modalActionButtonText: 'Delete',
    modalBody: <h1>Are you sure to want to delete?</h1>,
    buttonColor: 'red',
    buttonSize: 'md',
    mainButtonAction: async () => {
      try {
        const resultAction = await dispatch(deleteUserThunk(userId)).unwrap();
        console.log('RESULT', resultAction);
      } catch (error: any) {
        console.error('An error occurred:', error);
        toast({
          title: 'Error!',
          description: error.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'bottom-right',
        });
      }
    },
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
