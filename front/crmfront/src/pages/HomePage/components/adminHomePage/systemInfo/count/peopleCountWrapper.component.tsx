import styled from 'styled-components';
import { useAppSelector } from '../../../../../../utils/hooks.ts';
import { getAllUsers } from '../../../../../../store/userSlice.tsx';
import RoleTagComponent from '../../../../../../components/roleTag.component.tsx';
import { RoleType } from '../../../../../../types/UserType.ts';
import CountDivContentComponent from './countDivContent.component.tsx';
import CountDivComponent from './countDiv.component.tsx';

const Wrapper = styled.div`
  font-size: 1.3rem;
`;

const Count = styled.span`
  font-weight: bold;
`;

const PeopleCountWrapperComponent = () => {
  const users = useAppSelector(getAllUsers);
  const clientUsers = users.filter((user) => user.userRole === RoleType.CLIENT);
  const workerUsers = users.filter((user) => user.userRole === RoleType.WORKER);
  const adminUsers = users.filter((user) => user.userRole === RoleType.ADMIN);
  return (
    <Wrapper>
      Użytkownicy według roli
      <CountDivComponent>

        <CountDivContentComponent>
          <RoleTagComponent role={RoleType.CLIENT} />
          <Count>{clientUsers.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <RoleTagComponent role={RoleType.WORKER} />
          <Count>{workerUsers.length}</Count>
        </CountDivContentComponent>
        <CountDivContentComponent>
          <RoleTagComponent role={RoleType.ADMIN} />
          <Count>{adminUsers.length}</Count>
        </CountDivContentComponent>
      </CountDivComponent>
    </Wrapper>
  );
};

export default PeopleCountWrapperComponent;
