import styled from 'styled-components';
import CustomLabel from '../customLabel.component.tsx';

const EstimatedCostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {
  estimatedCost: number,
}

const EstimatedCostComponent = ({ estimatedCost }: Props) => (
  <EstimatedCostWrapper>
    <p>Przewidywany koszt:</p>
    <CustomLabel text={estimatedCost} />
  </EstimatedCostWrapper>
);

export default EstimatedCostComponent;
