import styled from 'styled-components';
import { UserDTOTaskDetailsCreator } from '../../../types/UserType.ts';

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
  creatorPreview: UserDTOTaskDetailsCreator,
}

const CreatorDetailsComponent = ({
  creatorPreview,
}: Props) => (
  <Wrapper>
    <h2>Creator:</h2>
    <p><span>Creator:</span> {creatorPreview.creatorName} {creatorPreview.creatorSurname} </p>
    <p><span>Username:</span> {creatorPreview.creatorUsername}</p>
    <p><span>Age:</span> {creatorPreview.creatorAge}  </p>
    <p><span>From:</span> {creatorPreview.creatorAge}</p>
  </Wrapper>
);

export default CreatorDetailsComponent;
