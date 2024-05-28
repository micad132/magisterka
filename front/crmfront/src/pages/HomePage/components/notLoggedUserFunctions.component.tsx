import { UnorderedList } from '@chakra-ui/react';
import styled from 'styled-components';
import NotLoggedUserSingleFuncComponent from './userFunc/notLoggedUserSingleFunc.component.tsx';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
`;

interface Props {
  functions: string[],
}

const NotLoggedUserFunctionsComponent = ({ functions }: Props) => (
  <Wrapper>
    <UnorderedList>{functions.map((func) => <NotLoggedUserSingleFuncComponent text={func} />)}</UnorderedList>
  </Wrapper>
);

export default NotLoggedUserFunctionsComponent;
