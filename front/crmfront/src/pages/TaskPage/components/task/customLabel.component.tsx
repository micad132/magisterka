import styled from 'styled-components';

interface Props {
  text: string,
}

const Label = styled.label`
    color: var(--background-color);
    font-weight: bold;
`;

const CustomLabel = ({ text }: Props) => {
  const properLabel = text === '' ? 'N/A' : text;
  return (
    <Label>{properLabel}</Label>
  );
};

export default CustomLabel;
