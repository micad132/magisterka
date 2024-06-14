import styled from 'styled-components';

interface Props {
  author: string,
}

const CustomText = styled.p`
  font-size: 1.2rem;
  
  span {
    font-weight: bold;
  }
`;

const SendingMessageAuthorComponent = ({ author }: Props) => (
  <CustomText>Wysyłasz wiadomość jako <span>{author}</span></CustomText>
);

export default SendingMessageAuthorComponent;
