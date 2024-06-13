import styled from 'styled-components';

const SingleItem = styled.div`
  background-color: red;
`;

interface Props {
  text: string,
  count: number,
}

const SingleItemCountComponent = ({ text, count }: Props) => (
  <SingleItem>
    <p>{text}</p>
    <p>{count}</p>
  </SingleItem>
);

export default SingleItemCountComponent;
