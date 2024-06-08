import styled from 'styled-components';

const SingleComment = styled.div`
  background-color: teal;
  margin: 20px auto 0 auto;
  max-width: 800px;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
`;

const AuthorAndDate = styled.div`
  display: flex;
  gap: 10px;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 10px;
  text-align: left;
`;

interface Props {
  authorUsername: string,
  authorSurname: string,
  authorName: string,
  date: string,
  description: string,
}

const SingleCommentComponent = ({
  authorName, date, description, authorSurname, authorUsername,
}: Props) => (
  <SingleComment>
    <AuthorAndDate>
      <p>{authorUsername}</p>
      <p>- {authorName}</p>
      <p>{authorSurname}</p>
      <p>{date}</p>
    </AuthorAndDate>
    <Description>{description}</Description>
  </SingleComment>
);

export default SingleCommentComponent;
