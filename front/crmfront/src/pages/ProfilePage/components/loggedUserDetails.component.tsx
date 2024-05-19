import styled from 'styled-components';
import RoleTag from '../../../components/roleTag.component.tsx';
import { RoleType } from '../../../types/UserType.ts';

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

const LoggedUserDetailsComponent = () => (
  <div>
    <Wrapper>
      <p>Michal Mosiolek</p>
      <RoleTag role={RoleType.CLIENT} />
    </Wrapper>
    User registered on 27.02.2023
  </div>
);

export default LoggedUserDetailsComponent;
