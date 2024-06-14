import styled from 'styled-components';
import CustomLabel from '../customLabel.component.tsx';
import { mapDateToString } from '../../../../../utils/mappers/mapDateToString.ts';

const EstimateFinishTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

interface Props {
  estimateFinishTime: string,
}

const EstimateFinishTimeComponent = ({ estimateFinishTime }: Props) => (
  <EstimateFinishTimeWrapper>
    <span>Przewidywany czas zakończenia:</span>
    <CustomLabel text={mapDateToString(estimateFinishTime)} />
  </EstimateFinishTimeWrapper>
);

export default EstimateFinishTimeComponent;
