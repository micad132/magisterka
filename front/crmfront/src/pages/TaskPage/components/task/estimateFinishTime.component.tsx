import styled from 'styled-components';
import CustomLabel from './customLabel.component.tsx';

const EstimateFinishTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

interface Props {
  estimateFinishTime: string,
}

const EstimateFinishTimeComponent = ({ estimateFinishTime }: Props) => {
  const g = 4;
  return (
    <EstimateFinishTimeWrapper>
      <span>Estimate finish time:</span>
      <CustomLabel text={estimateFinishTime} />
    </EstimateFinishTimeWrapper>
  );
};

export default EstimateFinishTimeComponent;
