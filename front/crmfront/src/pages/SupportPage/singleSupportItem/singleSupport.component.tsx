// @ts-nocheck
import styled from 'styled-components';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import ModalComponent from '../../../components/modals/modal.component.tsx';
import { ModalProps, SelectValue } from '../../../types/UtilTypes.ts';
import AuthorOfRequestComponent from './authorOfRequest.component.tsx';
import CreatedDateComponent from './createdDate.component.tsx';
import ConvertingToTaskContentComponent from './convertingToTaskContent.component.tsx';
import {
  ADDING_TASK_INITIAL_VALUE, AddingTask, AddingTaskRequest, TaskOrigin,
} from '../../../types/TaskType.ts';
import { MockedUsers } from '../../../mock/mockUsers.tsx';
import SupportDescriptionComponent from './supportDescription.component.tsx';
import SupportCategoryBadgeComponent from '../../../components/supportCategoryBadge.component.tsx';
import { Support } from '../../../types/SupportRequest.ts';
import MenuComponent from '../../../components/menu.component.tsx';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks.ts';
import { deleteSupportRequestThunk } from '../../../store/supportRequestSlice.tsx';
import { getAllUsers, getUserDetails } from '../../../store/userSlice.tsx';
import { RoleType, User } from '../../../types/UserType.ts';
import { addingTaskRequestThunk } from '../../../store/taskSlice.tsx';
import { ActionType, AddHistory } from '../../../types/HistoryType.ts';
import { addHistoryThunk } from '../../../store/historySlice.tsx';
import { mapDateToString } from '../../../utils/mappers/mapDateToString.ts';

const SingleSupportWrapper = styled.div`
  -webkit-box-shadow: 9px 3px 12px 3px teal;
  -moz-box-shadow: 9px 3px 12px 3px teal;
  box-shadow: 9px 3px 12px 3px teal;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalWrapper = styled.div`
  
  gap: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  width: max-content;
  margin: 0 auto;
  justify-self: flex-end; /* Wyjustuj element do dolnego brzegu */
`;

interface Props {
  support: Support,
  isAdmin: boolean,
  isWorker: boolean,
}

const SingleSupportComponent = ({
  support, isWorker, isAdmin,
}: Props) => {
  const [convertingToTask, setConvertingToTask] = useState<AddingTask>(ADDING_TASK_INITIAL_VALUE);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const users = useAppSelector(getAllUsers);
  const workerUsers = users.filter((user) => user.userRole === RoleType.WORKER);
  const loggedUser = useAppSelector(getUserDetails);

  const setState = (key: string, value: string | number) => {
    setConvertingToTask((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const convertToTask = () => {
    console.log('STEJT', convertingToTask);
    let assignee: User | undefined;
    if (workerUsers.length === 1) {
      assignee = workerUsers[0];
    } else {
      assignee = workerUsers.find((user) => user.id === Number(convertingToTask.assigneeId));
    }
    const taskBody: AddingTaskRequest = {
      estimatedFinishTime: String(convertingToTask.estimatedFinishTime),
      estimatedCost: Number(convertingToTask.estimatedCost),
      description: support.description,
      taskStatus: convertingToTask.taskStatus,
      taskPriority: convertingToTask.taskPriority,
      taskType: convertingToTask.taskType,
      creatorId: loggedUser.id,
      taskOrigin: TaskOrigin.FROM_SUPPORT,
      assigneeId: assignee?.id || null,
    };
    const historyObj: AddHistory = {
      performerId: loggedUser.id,
      historyActionType: ActionType.TASK,
      description: `Pracownik ${loggedUser.username} - ${loggedUser.name} ${loggedUser.surname} zamienił zgłoszenie wsparcia na usługę`,
    };
    try {
      dispatch(addingTaskRequestThunk(taskBody));
      dispatch(addHistoryThunk(historyObj));
      toast({
        title: 'Zgłoszenie wsparcia zamienione na usługę',
        description: 'Pomyślne zamieniłeś zgłoszenie wsparcia na usługę',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Coś poszło nie tak',
        description: 'Skontaktuj się z adminem!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
    console.log('STEJT', convertingToTask);
  };

  const deleteSupport = () => {
    try {
      dispatch(deleteSupportRequestThunk(support.id));
      toast({
        title: 'Zgłoszenie wsparcia usunięte',
        description: 'Pomyślnie usunąłeś zgłoszenie wsparcia',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Coś poszło nie tak',
        description: 'Skontaktuj się z adminem!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const SELECT_USERS: SelectValue[] = users.filter((user) => user.userRole === RoleType.WORKER).map((user) => ({
    text: `${user.username} - ${user.name} ${user.surname}`,
    value: user.id,
  }));

  console.log('SELECT USERS', support);

  const menuItems: ModalProps[] = [
    {
      modalHeader: 'Usuń zgłoszenie wsparcia',
      modalBody: <h1>Czy jesteś pewny że chcesz usunąć to zgłoszenie wsparcia?</h1>,
      buttonSize: 'md',
      mainButtonAction: deleteSupport,
      buttonText: 'Usuń',
      modalActionButtonText: 'Usuń',
      buttonColor: 'red',
    },
    {
      modalHeader: 'Zamień na usługę',
      buttonText: 'Zamień na usługę',
      modalActionButtonText: 'Zamień',
      buttonSize: 'md',
      mainButtonAction: convertToTask,
      modalBody: <ConvertingToTaskContentComponent values={convertingToTask} setState={setState} selectUsers={SELECT_USERS} />,
    },
  ];

  const menuItemsWorker: ModalProps = [

    {
      modalHeader: 'Zamień na usługę',
      buttonText: 'Zamień na usługę',
      modalActionButtonText: 'Zamień',
      buttonSize: 'md',
      mainButtonAction: convertToTask,
      modalBody: <ConvertingToTaskContentComponent values={convertingToTask} setState={setState} selectUsers={SELECT_USERS} />,
    },
  ];

  return (
    <SingleSupportWrapper>
      {isAdmin && <MenuComponent menuItems={menuItems} />}
      {isWorker && <MenuComponent menuItems={menuItemsWorker} />}
      <CreatedDateComponent date={mapDateToString(support.dateTime)} />
      <AuthorOfRequestComponent author={support.username} />
      <SupportCategoryBadgeComponent supportType={support.supportCategory} />
      <SupportDescriptionComponent text={support.description} />

    </SingleSupportWrapper>
  );
};

export default SingleSupportComponent;
