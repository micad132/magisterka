import styled from 'styled-components';

interface Props {
  id: string,
}

const DetailsWrapper = styled.div`
  font-size: 1.2rem;
`;

const Span = styled.span`
 font-weight: bold;
 padding-right: 10px; 
`;

const DetailsOfHistoryComponent = ({ id }: Props) => (
  <DetailsWrapper>
    <div>
      <Span>Date</Span>
      04.03.2000
    </div>
    <div>
      <Span>Details:</Span>
      focsjsjs
    </div>
  </DetailsWrapper>
);

export default DetailsOfHistoryComponent;
