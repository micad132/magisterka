import MessageIcon from '@mui/icons-material/Message';
import styled from 'styled-components';

const ProfileModalMessageWrapper = styled.div`
    display: flex;
    gap: 5px;
    font-size: 1.2rem;
    justify-content: space-evenly;
    align-items: center;
    width: max-content;
    padding: 1rem;
  
    &:hover {
      background-color: teal;
      cursor: pointer;
    }
`;

const ProfileModalMessageComponent = () => (
  <ProfileModalMessageWrapper>
    <MessageIcon />
    <p>2 messages</p>
  </ProfileModalMessageWrapper>
);

export default ProfileModalMessageComponent;
