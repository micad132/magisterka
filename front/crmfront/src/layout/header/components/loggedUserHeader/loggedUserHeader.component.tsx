import styled from 'styled-components';
import RoleTagComponent from '../../../../components/roleTag.component.tsx';
import { User } from '../../../../types/UserType.ts';

const LoggedUserHeader = styled.div`
  display: flex;
  font-size: 1.3rem;
  flex-direction: column;
  gap: 5px;
`;

const LoggedUserDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

interface Props {
  loggedUser: User,
}

const LoggedUserHeaderComponent = ({ loggedUser }: Props) => (
  <LoggedUserHeader>

    <p>Logged user:</p>
    <LoggedUserDetails>
      <span>{loggedUser.name} {loggedUser.surname}</span>
      <RoleTagComponent role={loggedUser.userRole} />
    </LoggedUserDetails>
  </LoggedUserHeader>
);

export default LoggedUserHeaderComponent;
