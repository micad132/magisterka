import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

interface Props {
  text: string,
}

const PageHeaderComponent = ({ text }: Props) => (
  <StyledH1>{text}</StyledH1>
);

export default PageHeaderComponent;
