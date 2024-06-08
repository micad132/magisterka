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
  LoggedUserMainDetails,
  SelfEditUser, SelfEditUserRequest,
} from '../../types/UserType.ts';
import NotLoggedComponent from '../../components/routesComponents/notLogged.component.tsx';
import { mapDateToString } from '../../utils/mappers/mapDateToString.ts';
import { sanitizeInput } from '../../utils/utilFunctions.ts';

const ProfilePageWrapper = styled.div`
  margin: 20px auto;
  width: 70%;
  max-width: 1200px;
  color: #000;
`;

const ProfilePageContainer = () => {
  console.log('djjdd');
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
    countryName: loggedUser.countryName,
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
    try {
      dispatch(editUserPersonalInfoThunk(editBody));
      toast({
        title: 'Personal info edited!',
        description: 'You have successfully edited your personal info!',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (e) {
      toast({
        title: 'Editing went wrong',
        description: 'Contact your admin!',
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
    countryName: loggedUser.countryName,
    email: loggedUser.email,
    phoneNumber: loggedUser.phoneNumber,
    postalCode: loggedUser.postalCode,
    streetName: loggedUser.streetName,
    userGender: loggedUser.userGender,
  };

  const editUserModal: ModalProps = {
    modalHeader: 'Edit your data',
    buttonText: 'Edit',
    buttonSize: 'md',
    modalActionButtonText: 'Edit',
    mainButtonAction: editPersonalInfoHandler,
    modalBody: <EditUserDataModalContentComponent values={editPersonalInfo} setPersonalInfo={setPersonalInfo} />,
  };

  if (loggedUser.name === '') {
    return <NotLoggedComponent />;
  }

  return (
    <ProfilePageWrapper>
      <LoggedUserDetailsComponent loggedUserMainDetails={loggedUserMainDetails} />
      <PersonalInfoDetailsComponent modalProps={editUserModal} userDetails={userDetails} />
      <StatsWrapperComponent />
    </ProfilePageWrapper>
  );
};

export default ProfilePageContainer;
