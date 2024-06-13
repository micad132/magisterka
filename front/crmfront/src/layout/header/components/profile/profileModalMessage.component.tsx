import MessageIcon from '@mui/icons-material/Message';
import styled from 'styled-components';
import { useAppSelector } from '../../../../utils/hooks.ts';
import { getAllMessages } from '../../../../store/messageSlice.tsx';
import { getUserDetails } from '../../../../store/userSlice.tsx';

const ProfileModalMessageWrapper = styled.div`
    display: flex;
    font-size: 1.2rem;
    width: max-content;
   flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Count = styled.span`
  font-weight: bold;
`;

const ProfileModalMessageComponent = () => {
  const messages = useAppSelector(getAllMessages);
  const userDetails = useAppSelector(getUserDetails);
  const sentMessagesByUser = messages.filter((msg) => msg.authorUsername === userDetails.username);
  const receivedMessagesByUser = messages.filter((msg) => msg.receiverUsername === userDetails.username);
  return (
    <ProfileModalMessageWrapper>
      <Content>
        Napisałeś <Count>{sentMessagesByUser.length}</Count> wiadomosci <MessageIcon />
      </Content>
      <Content>
        Otrzymałeś <Count>{receivedMessagesByUser.length}</Count> wiadomości <MessageIcon />
      </Content>
    </ProfileModalMessageWrapper>
  );
};

export default ProfileModalMessageComponent;
