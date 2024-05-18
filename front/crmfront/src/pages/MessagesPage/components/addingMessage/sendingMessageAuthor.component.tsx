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

const SendingMessageAuthorComponent = ({ author }: Props) => {
  const g = 4;
  return (
    <CustomText>You are sending message as <span>{author}</span></CustomText>
  );
};

export default SendingMessageAuthorComponent;
