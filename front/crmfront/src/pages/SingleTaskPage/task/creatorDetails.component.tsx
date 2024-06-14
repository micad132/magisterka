import styled from 'styled-components';
import { UserDTOTaskDetailsCreator } from '../../../types/UserType.ts';
import RoleTagComponent from '../../../components/roleTag.component.tsx';

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

const RoleWrapper = styled.div`
  display: flex;
  width: min-content;
  align-items: center;
  margin: 0 auto;
`;

interface Props {
  creatorPreview: UserDTOTaskDetailsCreator,
}

const CreatorDetailsComponent = ({
  creatorPreview,
}: Props) => (
  <Wrapper>
    <h2>Twórca:</h2>
    <p><span>Twórca:</span> {creatorPreview.creatorName} {creatorPreview.creatorSurname} </p>
    <p><span>Nazwa:</span> {creatorPreview.creatorUsername}</p>
    <RoleWrapper><span>Rola:</span> <RoleTagComponent role={creatorPreview.creatorRole} /> </RoleWrapper>
    <p><span>Wiek:</span> {creatorPreview.creatorAge}  </p>
    <p><span>Województwo:</span> {creatorPreview.creatorCountry}</p>
  </Wrapper>
);

export default CreatorDetailsComponent;
