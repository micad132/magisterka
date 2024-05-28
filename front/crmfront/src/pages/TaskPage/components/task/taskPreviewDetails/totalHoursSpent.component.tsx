import styled from 'styled-components';
import CustomLabel from '../customLabel.component.tsx';

const TotalHoursSpentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {
  totalHoursSpent: number,
}

const TotalHoursSpentComponent = ({ totalHoursSpent }: Props) => (
  <TotalHoursSpentWrapper>
    <span>Hours spent:</span>
    <CustomLabel text={totalHoursSpent} />
  </TotalHoursSpentWrapper>
);

export default TotalHoursSpentComponent;
