import styled from 'styled-components';

const StyledP = styled.p`
  font-weight: bold;
  margin: 10px 0;
`;

interface Props {
  authorUsername: string,
}

const SurveyAuthorComponent = ({ authorUsername }: Props) => (
  <StyledP>Made by: {authorUsername}</StyledP>
);

export default SurveyAuthorComponent;
