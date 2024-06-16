import styled from 'styled-components';
import { UserDTOTaskDetailsAssignee } from '../../../types/UserType.ts';
import RoleTagComponent from '../../../components/roleTag.component.tsx';

const Wrapper = styled.div`
  width: 400px;
  border: 2px solid teal;
  border-left: 20px solid teal;
  padding: 5px 0;
  h2{
    font-weight: bold;
    padding-bottom: 10px;
    font-size: 1.1rem;
  }
  span{
    font-weight: bold;
  }
`;

const NotAssignedWrapper = styled.div`
  width: 400px;
  border: 2px solid teal;
  border-left: 20px solid teal;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    font-weight: bold;
    padding-bottom: 10px;
    font-size: 1.5rem;
  }
`;

const RoleWrapper = styled.div`
  display: flex;
  width: min-content;
  align-items: center;
  margin: 0 auto;
`;

interface Props {
  assigneePreview: UserDTOTaskDetailsAssignee
}

const AssigneeDetailsComponent = ({ assigneePreview }: Props) => {
  if (!assigneePreview.assigneeUsername) {
    return (
      <NotAssignedWrapper><h2>N/A</h2></NotAssignedWrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Przypisany:</h2>
      <p><span>Przypisany:</span> {assigneePreview.assigneeName} {assigneePreview.assigneeSurname}</p>
      <p><span>Nazwa:</span> {assigneePreview.assigneeUsername}</p>
      <RoleWrapper><span>Rola:</span> <RoleTagComponent role={assigneePreview.assigneeRole} /> </RoleWrapper>
      <p><span>Wiek:</span> {assigneePreview.assigneeAge}</p>
      <p><span>Województwo:</span> {assigneePreview.assigneeCountry}</p>
    </Wrapper>
  );
};

export default AssigneeDetailsComponent;
