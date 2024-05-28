import styled from 'styled-components';

const Wrapper = styled.div`
  //background-color: teal;
  width: 400px;
  border: 2px solid teal;
  border-left: 20px solid teal;
  padding: 5px 0;
  
  h2{
    font-weight: bold;
    padding-bottom: 10px;
    font-size: 1.1rem;
  }
  
  span{
    font-weight: bold;
  }
`;

interface Props {
  creatorName: string,
  creatorSurname: string,
  creatorUsername: string,
  creatorAge: number,
  creatorCountry: string,
}

const CreatorDetailsComponent = ({
  creatorName, creatorCountry, creatorSurname, creatorUsername, creatorAge,
}: Props) => (
  <Wrapper>
    <h2>Creator:</h2>
    <p><span>Creator:</span> {creatorName} {creatorSurname} </p>
    <p><span>Username:</span> {creatorUsername}</p>
    <p><span>Age:</span> {creatorAge}  </p>
    <p><span>From:</span> {creatorCountry}</p>
  </Wrapper>
);

export default CreatorDetailsComponent;
