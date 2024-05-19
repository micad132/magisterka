import styled from 'styled-components';

const SingleStat = styled.div`
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 10px;
      background-color: teal;
      color: #fff;
      
  span {
    font-weight: bold;
  }
`;

interface Props {
  text: string,
  count: number,
}

const SingleStatComponent = ({ text, count }: Props) => (
  <SingleStat>
    {text}
    <span>{count}</span>
  </SingleStat>
);

export default SingleStatComponent;
