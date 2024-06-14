import styled from 'styled-components';

const FontBold = styled.span`
  font-weight: bold;
`;

interface Props {
  text: string,
}

const SupportDescriptionComponent = ({ text }: Props) => (
  <>
    <FontBold>Opis:</FontBold>
    <p>{text}</p>
  </>
);

export default SupportDescriptionComponent;
