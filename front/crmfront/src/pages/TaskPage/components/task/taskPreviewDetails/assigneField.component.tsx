import styled from 'styled-components';
import CustomLabel from '../customLabel.component.tsx';

const AsigneeFieldWraper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {
  assignee: string,
}

const AssigneField = ({ assignee }: Props) => (
  <AsigneeFieldWraper>
    <span>Assignee:</span>
    {assignee === null ? <CustomLabel text="N/A" /> : <CustomLabel text={assignee} />}
  </AsigneeFieldWraper>
);

export default AssigneField;
