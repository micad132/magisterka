import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import HelpIcon from '@mui/icons-material/Help';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MessageIcon from '@mui/icons-material/Message';
import QuizIcon from '@mui/icons-material/Quiz';
import CommentIcon from '@mui/icons-material/Comment';
import SingleLink from './singleLink.component.tsx';
import { useAppSelector } from '../../../utils/hooks.ts';
import { getUserDetails } from '../../../store/userSlice.tsx';
import { RoleType } from '../../../types/UserType.ts';

const NavWrapper = styled.nav`
    grid-area: nav;
    min-height: 100vh;
    background-color: var(--background-color);
    color: var(--nav-font-color);
    font-size: 1.5rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 20px;
  left: 0px;
`;

const NavComponent = () => {
  const loggedUser = useAppSelector(getUserDetails);
  const isLoggedUser = loggedUser.username !== '';
  return (
    <NavWrapper>
      <LinksWrapper>
        <SingleLink path="/" text="Home" icon={<HomeIcon />} />
        {isLoggedUser && <SingleLink path="/tasks" text="Tasks" icon={<TaskIcon />} />}
        {loggedUser.userRole === RoleType.ADMIN && <SingleLink path="/people" text="People" icon={<PersonIcon />} />}
        {/* {isLoggedUser && <SingleLink path="/workers" text="Workers" icon={<EngineeringIcon />} />} */}
        {isLoggedUser && <SingleLink path="/messages" text="Messages" icon={<MessageIcon />} />}
        {isLoggedUser && <SingleLink path="/history" text="History" icon={<HistoryIcon />} />}
        {loggedUser.userRole === RoleType.ADMIN && <SingleLink path="/stats" text="Stats" icon={<InsertChartIcon />} />}
        {isLoggedUser && <SingleLink path="/support" text="Support" icon={<HelpIcon />} />}
        {loggedUser.userRole === RoleType.ADMIN && <SingleLink path="/survey" text="Survey" icon={<QuizIcon />} />}
        {isLoggedUser && <SingleLink path="/comments" text="Comments" icon={<CommentIcon />} />}
      </LinksWrapper>
    </NavWrapper>
  );
};

export default NavComponent;
