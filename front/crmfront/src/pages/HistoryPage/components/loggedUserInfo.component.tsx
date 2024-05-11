import styled from 'styled-components';
import RoleTagComponent from '../../../components/roleTag.component.tsx';
import { RoleType } from '../../../types/UserType.ts';

const LoggedUserInfoWrapper = styled.div`
    display: flex;
    margin: 20px auto;
    width: max-content;
    justify-content: space-evenly;
    align-items: center;
    gap: 5px;
`;

const LoggedUserInfoComponent = () => (
  <LoggedUserInfoWrapper>
    You are logged as mikad132 <RoleTagComponent role={RoleType.CLIENT} />
  </LoggedUserInfoWrapper>
);

export default LoggedUserInfoComponent;
