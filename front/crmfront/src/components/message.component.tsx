import styled from 'styled-components';

interface Props {
  message: string,
}

const NoItemsWrapper = styled.div`
  background-color: teal;
  padding: 20px;
  max-width: 300px;
  margin: 20px auto;
  border-radius: 10px;
  p {
    font-weight: bold;
    color: #fff;
  }
`;

const MessageComponent = ({ message }: Props) => (
  <NoItemsWrapper>
    <p>{message}</p>
  </NoItemsWrapper>
);

export default MessageComponent;
