import styled from 'styled-components';

interface Props {
  text: string,
}

const Span = styled.span`
  font-weight: bold;
`;

const FontBoldSpanComponent = ({ text }: Props) => (
  <Span>{text}</Span>
);

export default FontBoldSpanComponent;
