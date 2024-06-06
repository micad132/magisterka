import styled from 'styled-components';

const Label = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

interface Props {
  text: string,
}

const LabelTextComponent = ({ text }: Props) => (
  <Label>{text}</Label>
);

export default LabelTextComponent;
