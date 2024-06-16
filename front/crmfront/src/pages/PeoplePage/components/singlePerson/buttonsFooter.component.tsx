import styled from 'styled-components';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import ModalComponent from '../../../../components/modals/modal.component.tsx';
import { ModalProps, SelectValue } from '../../../../types/UtilTypes.ts';
import EditUserContentComponent from './editUserContent.component.tsx';
import { useAppDispatch } from '../../../../utils/hooks.ts';
import { deleteUserThunk, editUserData } from '../../../../store/userSlice.tsx';
import { EditUser, RoleType, User } from '../../../../types/UserType.ts';

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
  const [selectedRole, setSelectedRole] = useState<string>('');

  const deletingUserContent = (
    <DeletingWrapper>
      <h1>Czy na pewno chcesz usunąć tego użytkownika?</h1>
      <p>Usunięcie tego użytkownika spowoduje również usunięcie wszystkich powiązanych i stworzonych przez niego danych</p>
      <p>Wszystkie ankiety, wsparcia, wiadomości, komentarze, zadania zostaną usunięte!</p>
    </DeletingWrapper>
  );

  const changeRole = async () => {
    const obj: EditUser = {
      userRole: selectedRole,
      id: userId,
    };
    try {
      dispatch(editUserData(obj));
    } catch (e) {
      throw e;
    }
  };

  const userRoles: SelectValue[] = [

    {
      text: 'klient',
      value: RoleType.CLIENT,
    },
    {
      text: 'pracownik',
      value: RoleType.WORKER,
    },
  ];

  const editPersonModalContent: ModalProps = {
    modalHeader: 'Edytuj rolę użytkownika',
    buttonText: 'Edytuj',
    modalActionButtonText: 'Edytuj',
    modalBody: <EditUserContentComponent userRoles={userRoles} changeRole={setSelectedRole} />,
    buttonSize: 'md',
    mainButtonAction: changeRole,
  };

  const deletePersonModalContent: ModalProps = {
    modalHeader: 'Usun użytkownika',
    buttonText: 'Usuń',
    modalActionButtonText: 'Usuń',
    modalBody: deletingUserContent,
    buttonColor: 'red',
    buttonSize: 'md',
    mainButtonAction: async () => {
      try {
        const resultAction = await dispatch(deleteUserThunk(userId)).unwrap();
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
