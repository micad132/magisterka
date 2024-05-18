import styled from 'styled-components';

interface Props {
  date: string,
}

const Span = styled.span`
  align-self: flex-end;
  margin-right: 10px;
  gap: 0px;
`;

const CreatedDateComponent = ({ date }: Props) => (
  <Span>{date}</Span>
);

export default CreatedDateComponent;
