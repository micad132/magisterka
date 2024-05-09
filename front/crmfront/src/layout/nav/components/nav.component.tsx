import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import HelpIcon from '@mui/icons-material/Help';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MessageIcon from '@mui/icons-material/Message';
import SingleLink from './singleLink.component.tsx';

const NavWrapper = styled.nav`
    grid-area: nav;
    height: 100vh;
    //background-color: #fff;
    background-color: var(--background-color);
    color: var(--nav-font-color);
    font-size: 1.5rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavComponent = () => (
  <NavWrapper>
    <h1>CRM</h1>
    <LinksWrapper>
      <SingleLink path="/" text="Home" icon={<HomeIcon />} />
      <SingleLink path="/tasks" text="Tasks" icon={<TaskIcon />} />
      <SingleLink path="/people" text="People" icon={<PersonIcon />} />
      <SingleLink path="/workers" text="Workers" icon={<EngineeringIcon />} />
      <SingleLink path="/messages" text="Messages" icon={<MessageIcon />} />
      <SingleLink path="/history" text="History" icon={<HistoryIcon />} />
      <SingleLink path="/stats" text="Stats" icon={<InsertChartIcon />} />
      <SingleLink path="/support" text="Support" icon={<HelpIcon />} />
    </LinksWrapper>
  </NavWrapper>
);

export default NavComponent;
