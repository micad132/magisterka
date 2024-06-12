import styled from 'styled-components';
import { useToast } from '@chakra-ui/react';
import ModalComponent from '../../../../components/modals/modal.component.tsx';
import { ModalProps } from '../../../../types/UtilTypes.ts';
import EditUserContentComponent from './editUserContent.component.tsx';
import { useAppDispatch } from '../../../../utils/hooks.ts';
import { deleteUserThunk } from '../../../../store/userSlice.tsx';
import { User } from '../../../../types/UserType.ts';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

interface Props {
  userId: number,
  user: User,
}

const DeletingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
  color: red;
`;

const ButtonsFooterComponent = ({ userId, user }: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const deletingUserContent = (
    <DeletingWrapper>
      <h1>Are you sure you want to delete this user?</h1>
      <p>Deleting this user will also delete all connected and created data by this user</p>
      <p>All surveys, supports, charts, messages, comments, tasks will be gone!</p>
    </DeletingWrapper>
  );

  const editPersonModalContent: ModalProps = {
    modalHeader: 'Edit person',
    buttonText: 'Edit',
    modalActionButtonText: 'Edit',
    modalBody: <EditUserContentComponent user={user} />,
    buttonSize: 'md',
    mainButtonAction: () => {},
  };

  const deletePersonModalContent: ModalProps = {
    modalHeader: 'Delete person',
    buttonText: 'Delete',
    modalActionButtonText: 'Delete',
    modalBody: deletingUserContent,
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
