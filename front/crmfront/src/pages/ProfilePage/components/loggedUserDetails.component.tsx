import styled from 'styled-components';
import RoleTag from '../../../components/roleTag.component.tsx';
import { LoggedUserMainDetails } from '../../../types/UserType.ts';

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

interface Props {
  loggedUserMainDetails: LoggedUserMainDetails,
}

const LoggedUserDetailsComponent = ({
  loggedUserMainDetails: {
    userRole, username, createdAccountDate,
  },
}: Props) => (
  <div>
    <Wrapper>
      <p>{username}</p>
      <RoleTag role={userRole} />
    </Wrapper>
    Użytkownik zarejestrowany: {createdAccountDate}
  </div>
);

export default LoggedUserDetailsComponent;
