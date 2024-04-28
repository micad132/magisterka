import styled from 'styled-components';

interface Props {
  text: string,
}

const Label = styled.label`
    color: var(--background-color);
    font-weight: bold;
`;

const CustomLabel = ({ text }: Props) => (
  <Label>{text}</Label>
);

export default CustomLabel;
