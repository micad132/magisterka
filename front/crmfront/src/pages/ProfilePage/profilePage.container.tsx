import styled from 'styled-components';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import LoggedUserDetailsComponent from './components/loggedUserDetails.component.tsx';
import PersonalInfoDetailsComponent from './components/personalInfoDetails.component.tsx';
import { ModalProps } from '../../types/UtilTypes.ts';
import StatsWrapperComponent from './components/stats/statsWrapper.component.tsx';
import EditUserDataModalContentComponent from './components/editUserDataModalContent.component.tsx';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import { editUserPersonalInfoThunk, getUserDetails } from '../../store/userSlice.tsx';
import {
  LoggedUserDetails,
  LoggedUserMainDetails, ProfileCount, RoleType,
  SelfEditUser, SelfEditUserRequest, WorkerProfileCount,
} from '../../types/UserType.ts';
import NotLoggedComponent from '../../components/routesComponents/notLogged.component.tsx';
import { mapDateToString } from '../../utils/mappers/mapDateToString.ts';
import { sanitizeInput } from '../../utils/utilFunctions.ts';
import { ActionType, AddHistory } from '../../types/HistoryType.ts';
import { addHistoryThunk } from '../../store/historySlice.tsx';
import WorkerStatsWrapperComponent from './components/stats/workerStatsWrapper.component.tsx';

const ProfilePageWrapper = styled.div`
  margin: 20px auto;
  width: 70%;
  max-width: 1200px;
  color: #000;
`;

const ProfilePageContainer = () => {
  const loggedUser = useAppSelector(getUserDetails);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const initialUser: SelfEditUser = {
    email: loggedUser.email,
    phoneNumber: loggedUser.phoneNumber,
    postalCode: loggedUser.postalCode,
    streetName: loggedUser.streetName,
    username: loggedUser.username,
    age: loggedUser.age,
    name: loggedUser.name,
    provinceName: loggedUser.provinceName,
    pesel: loggedUser.pesel,
    surname: loggedUser.surname,
    cityName: loggedUser.cityName,
  };

  const [editPersonalInfo, setEditPersonalInfo] = useState<SelfEditUser>(initialUser);

  const setPersonalInfo = (value: string | number, key: string) => {
    if (typeof value === 'string') {
      setEditPersonalInfo((prevState) => ({
        ...prevState,
        [key]: sanitizeInput(value),
      }));
    } else {
      setEditPersonalInfo((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
  };

  const editPersonalInfoHandler = () => {
    const editBody: SelfEditUserRequest = {
      ...editPersonalInfo,
      id: loggedUser.id,
    };
    const historyObj: AddHistory = {
      performerId: loggedUser.id,
      historyActionType: ActionType.PROFILE,
      description: `Uzytkownik ${loggedUser.username} - ${loggedUser.name} ${loggedUser.surname} zmienil swoje dane osobowe`,
    };
    try {
      dispatch(editUserPersonalInfoThunk(editBody));
      dispatch(addHistoryThunk(historyObj));
      toast({
        title: 'Edytowano!',
        description: 'Edytowano dane osobowe!!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Cos poszlo nie tak!',
        description: 'Skontaktuj sie z adminem!!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const loggedUserMainDetails: LoggedUserMainDetails = {
    username: loggedUser.username,
    userRole: loggedUser.userRole,
    createdAccountDate: mapDateToString(loggedUser.createdAccountDate),
  };

  const userDetails: LoggedUserDetails = {
    name: loggedUser.name,
    surname: loggedUser.surname,
    age: loggedUser.age,
    cityName: loggedUser.cityName,
    provinceName: loggedUser.provinceName,
    email: loggedUser.email,
    phoneNumber: loggedUser.phoneNumber,
    postalCode: loggedUser.postalCode,
    streetName: loggedUser.streetName,
    userGender: loggedUser.userGender,
  };

  const statsCount: ProfileCount = {
    commentsCount: loggedUser.comments.length,
    historiesCount: loggedUser.histories.length,
    messagesCount: loggedUser.messages.length,
    surveysCount: loggedUser.surveys.length,
    taskAssigneeCount: loggedUser.assignedTasks.length,
    tasksMadeCount: loggedUser.createdTasks.length,
    supportsCount: loggedUser.supportRequestModels.length,
  };

  const workerCount: WorkerProfileCount = {
    historiesCount: loggedUser.histories.length,
    messagesCount: loggedUser.messages.length,
    taskAssigneeCount: loggedUser.assignedTasks.length,
    tasksMadeCount: loggedUser.createdTasks.length,
    commentsCount: loggedUser.comments.length,
  };

  const editUserModal: ModalProps = {
    modalHeader: 'Edytuj swoje dane',
    buttonText: 'Edytuj dane',
    buttonSize: 'md',
    modalActionButtonText: 'Edytuj',
    mainButtonAction: editPersonalInfoHandler,
    modalBody: <EditUserDataModalContentComponent values={editPersonalInfo} setPersonalInfo={setPersonalInfo} />,
  };

  if (loggedUser.name === '') {
    return <NotLoggedComponent />;
  }

  if (loggedUser.userRole === RoleType.WORKER) {
    return (
      <ProfilePageWrapper>
        <LoggedUserDetailsComponent loggedUserMainDetails={loggedUserMainDetails} />
        <PersonalInfoDetailsComponent modalProps={editUserModal} userDetails={userDetails} />
        <WorkerStatsWrapperComponent count={workerCount} />
      </ProfilePageWrapper>
    );
  }

  return (
    <ProfilePageWrapper>
      <LoggedUserDetailsComponent loggedUserMainDetails={loggedUserMainDetails} />
      <PersonalInfoDetailsComponent modalProps={editUserModal} userDetails={userDetails} />
      <StatsWrapperComponent count={statsCount} />
    </ProfilePageWrapper>
  );
};

export default ProfilePageContainer;
