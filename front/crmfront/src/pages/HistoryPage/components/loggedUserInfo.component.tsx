import styled from 'styled-components';
import RoleTagComponent from '../../../components/roleTag.component.tsx';
import { RoleTypeType } from '../../../types/UserType.ts';

const LoggedUserInfoWrapper = styled.div`
    display: flex;
    margin: 20px auto;
    width: max-content;
    justify-content: space-evenly;
    align-items: center;
    gap: 5px;
`;

interface Props {
  name: string,
  surname: string,
  role: RoleTypeType,
}

const LoggedUserInfoComponent = ({ name, surname, role }: Props) => (
  <LoggedUserInfoWrapper>
    Jesteś zalogowany jako {name} {surname} <RoleTagComponent role={role} />
  </LoggedUserInfoWrapper>
);

export default LoggedUserInfoComponent;
