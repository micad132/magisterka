import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  path: string,
  text: string,
  icon: ReactNode,
}

const LinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  
  &:hover {
    color: blue;
  }
`;

const SingleLink = ({ path, text, icon }: Props) => (
  <LinkWrapper to={path}>
    {icon}
    {text}
  </LinkWrapper>
);

export default SingleLink;
