import styled from 'styled-components';

const getColorByCount = (count: number) => {
  if (count > 4.0) return 'green';
  if (count > 2.0) return 'orange';
  return 'red';
};

const SingleRate = styled.div<{ count: number }>`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  p:nth-child(1) {
    font-weight: bold;
  }
  p:nth-child(2) {
    color: ${({ count }) => getColorByCount(count)};
    font-weight: bold;
  }
`;

interface Props {
  text: string,
  count: number,
}

const SingleRateComponent = ({ text, count }: Props) => (
  <SingleRate count={count}>
    <p>{text}</p>
    <p>{count}</p>
  </SingleRate>
);

export default SingleRateComponent;
