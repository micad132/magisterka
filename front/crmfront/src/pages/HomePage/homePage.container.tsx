import styled from 'styled-components';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import {
  fetchAllUsersThunk, fetchUserDetailsThunk, getUserDetails,
} from '../../store/userSlice.tsx';
import { fetchSupportRequestsThunk } from '../../store/supportRequestSlice.tsx';
import { fetchMessagesThunk } from '../../store/messageSlice.tsx';
import { fetchTasksThunk } from '../../store/taskSlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import AdminHomePageContainer from './components/adminHomePage/adminHomePage.container.tsx';
import { API_URL } from '../../utils/consts.ts';

const HomePageHeader = styled.h1`
  color: var(--font-color);
  font-size: 2rem !important;
  background-color: brown;
`;

const HomePage = () => {
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(getUserDetails);
  // const allUsers = useAppSelector(getAllUsers);
  // const [isUserDataFetched, setIsUserDataFetched] = useState<boolean>(false);
  // const [userInfoFetched, setUserInfoFetched] = useState(false);

  const test = async () => {
    const data = await axios.get(`${API_URL}/task`);
    console.log('data', data);
  };

  useEffect(() => {
    // console.log('hej');
    // if (userDetails.username === '') {
    //   dispatch(fetchUserDetailsThunk());
    // } else if (allUsers.length === 0) {
    //   dispatch(fetchAllUsersThunk());
    // }
    // const fetchUserData = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:8080/api/v1/user/getLoggedUser');
    //     setIsUserDataFetched(true);
    //     setUserInfoFetched(response.data);
    //     console.log('RESPONSE', response);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };
    // if (!userInfoFetched && !isUserDataFetched) {
    //   fetchUserData();
    // }
    // dispatch(fetchAllUsersThunk());
    // dispatch(fetchSupportRequestsThunk());
    // dispatch(fetchUserDetailsThunk());
    // dispatch(fetchMessagesThunk());
    // dispatch(fetchTasksThunk());
  }, []);

  // if(loggedUser.name === '') {
  //   return(
  //       <PageWrapperComponent>
  //
  //       </PageWrapperComponent>
  //   )
  // }

  if (loggedUser.userRole === RoleType.CLIENT && loggedUser.name !== '') {
    return (
      <PageWrapperComponent>
        <HomePageHeader>Hello {loggedUser.name} {loggedUser.surname}</HomePageHeader>
        <p>You created account in this system at 28.03.2024 18:21</p>
        <p>Until now you created:</p>
        <Button colorScheme="teal" onClick={test}>TEST</Button>
      </PageWrapperComponent>
    );
  }

  if (loggedUser.userRole === RoleType.ADMIN) {
    return (
      <AdminHomePageContainer />
    );
  }

  return (
    <div>
      <HomePageHeader>System CRM zawiera</HomePageHeader>
    </div>
  );
};

export default HomePage;
