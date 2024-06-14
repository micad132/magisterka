import styled from 'styled-components';

const Paragraph = styled.p`
  font-weight: bold;
`;

interface Props {
  author: string
}

const AuthorOfRequestComponent = ({ author }: Props) => (
  <Paragraph>Zgłoszone przez {author}</Paragraph>
);

export default AuthorOfRequestComponent;
