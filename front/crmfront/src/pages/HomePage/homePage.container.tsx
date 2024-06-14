import styled from 'styled-components';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../utils/hooks.ts';
import {
  fetchAllUsersThunk, fetchUserDetailsThunk, getUserDetails,
} from '../../store/userSlice.tsx';
import { fetchSupportRequestsThunk, getAllSupportRequests } from '../../store/supportRequestSlice.tsx';
import { fetchMessagesThunk, getAllMessages } from '../../store/messageSlice.tsx';
import { fetchTasksThunk, getAllTasks } from '../../store/taskSlice.tsx';
import { RoleType } from '../../types/UserType.ts';
import PageWrapperComponent from '../../components/pageWrapper.component.tsx';
import AdminHomePageContainer from './components/adminHomePage/adminHomePage.container.tsx';
import { API_URL } from '../../utils/consts.ts';
import InfoCountWrapperComponent from './components/userHomePage/infoCountWrapper.component.tsx';
import SingleItemCountComponent from './components/userHomePage/singleItemCount.component.tsx';
import SystemSingleInfoComponent from './components/adminHomePage/systemSingleInfo.component.tsx';
import SingleInfoWrapperComponent from './components/singleInfoWrapper.component.tsx';
import { getAllHistories } from '../../store/historySlice.tsx';
import { getAllSurveys } from '../../store/surveySlice.tsx';
import { getAllComments } from '../../store/commentsSlice.tsx';
import { mapDateToString } from '../../utils/mappers/mapDateToString.ts';

const HomePageHeader = styled.h1`
  color: var(--font-color);
  font-size: 2rem !important;
`;

const HomePage = () => {
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(getUserDetails);
  // const allUsers = useAppSelector(getAllUsers);
  // const [isUserDataFetched, setIsUserDataFetched] = useState<boolean>(false);
  // const [userInfoFetched, setUserInfoFetched] = useState(false);
  const messages = useAppSelector(getAllMessages);
  const tasks = useAppSelector(getAllTasks);
  const histories = useAppSelector(getAllHistories);
  const surveys = useAppSelector(getAllSurveys);
  const support = useAppSelector(getAllSupportRequests);
  const comments = useAppSelector(getAllComments);

  const loggedClientCreatedTasks = tasks.filter((task) => task.userDTOTaskDetailsCreator.creatorUsername === loggedUser.username);
  const loggedClientCreatedMessages = messages.filter((msg) => msg.authorUsername || msg.receiverUsername === loggedUser.username);
  const loggedClientCreatedHistories = histories.filter((history) => history.performerUsername === loggedUser.username);
  const loggedClientCreatedSurveys = surveys.filter((survey) => survey.authorUsername === loggedUser.username);
  const loggedClientCreatedSupports = support.filter((spr) => spr.username === loggedUser.username);
  const loggedClientCreatedComments = comments.filter((comment) => comment.authorUsername === loggedUser.username);

  if (loggedUser.userRole === RoleType.CLIENT && loggedUser.name !== '') {
    return (
      <PageWrapperComponent>
        <HomePageHeader>Witaj {loggedUser.name} {loggedUser.surname}</HomePageHeader>
        <p>Utworzyłeś konto: {mapDateToString(loggedUser.createdAccountDate)}</p>
        <p>Do tej pory stworzyłeś:</p>
        <SingleInfoWrapperComponent>
          <SystemSingleInfoComponent count={loggedClientCreatedTasks.length} text="Usługi" />
          <SystemSingleInfoComponent count={loggedClientCreatedMessages.length} text="Wiadomości" />
          <SystemSingleInfoComponent count={loggedClientCreatedHistories.length} text="Historia" />
          <SystemSingleInfoComponent count={loggedClientCreatedSurveys.length} text="Ankiety" />
          <SystemSingleInfoComponent count={loggedClientCreatedSupports.length} text="Zgłoszenia" />
          <SystemSingleInfoComponent count={loggedClientCreatedComments.length} text="Komentarze" />
        </SingleInfoWrapperComponent>
      </PageWrapperComponent>
    );
  }

  if (loggedUser.userRole === RoleType.ADMIN || loggedUser.userRole === RoleType.WORKER) {
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
