import styled from 'styled-components';

const Info = styled.div`
  width: max-content;
  align-self: flex-start;
`;

const Span = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

interface Props {
  label: string,
  text: string,
}
const PersonalInfoLabelComponent = ({ label, text }: Props) => (
  <Info>
    <p><Span>{label}:</Span>{text}</p>
  </Info>
);

export default PersonalInfoLabelComponent;
