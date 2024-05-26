import styled from 'styled-components';
import RoleTag from '../../../components/roleTag.component.tsx';
import { LoggedUserMainDetails, RoleType } from '../../../types/UserType.ts';
import { useAppSelector } from '../../../utils/hooks.ts';
import { getUserDetails } from '../../../store/userSlice.tsx';

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
    User registered on {createdAccountDate}
  </div>
);

export default LoggedUserDetailsComponent;
