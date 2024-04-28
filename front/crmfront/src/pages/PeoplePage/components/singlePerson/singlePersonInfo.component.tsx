import styled from 'styled-components';

const SinglePersonInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  
  span:nth-child(1) {
    font-weight: bold;
  }
`;

interface Props {
  label: string,
  text: string
}

const SinglePersonInfoComponent = ({ label, text }: Props) => {
  console.log('jdjf');
  return (
    <SinglePersonInfoWrapper>
      <span>{label}:</span>
      <span>{text}</span>
    </SinglePersonInfoWrapper>
  );
};

export default SinglePersonInfoComponent;
