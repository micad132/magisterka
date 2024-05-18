import styled from 'styled-components';

const Paragraph = styled.p`
  font-weight: bold;
`;

interface Props {
  author: string
}

const AuthorOfRequestComponent = ({ author }: Props) => (
  <Paragraph>Raised by {author}</Paragraph>
);

export default AuthorOfRequestComponent;
