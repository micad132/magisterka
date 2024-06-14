import styled from 'styled-components';
import CustomLabel from '../customLabel.component.tsx';

const ActualCostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

interface Props {
  actualCost: number,
}

const ActualCostComponent = ({ actualCost }: Props) => (
  <ActualCostWrapper>
    <span>Aktualny koszt:</span>
    <CustomLabel text={actualCost} />
  </ActualCostWrapper>
);

export default ActualCostComponent;
