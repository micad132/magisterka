import styled from 'styled-components';
import CustomLabel from '../customLabel.component.tsx';

const CreatedByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

interface Props {
  creator: string,
}

const CreatedByComponent = ({ creator }: Props) => (
  <CreatedByWrapper>
    <span>Utworzona przez:</span>
    <CustomLabel text={creator} />
  </CreatedByWrapper>
);

export default CreatedByComponent;
