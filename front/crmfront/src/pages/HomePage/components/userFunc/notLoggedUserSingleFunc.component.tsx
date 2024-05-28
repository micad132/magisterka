import { ListItem } from '@chakra-ui/react';
import styled from 'styled-components';

const ListItemCustom = styled(ListItem)`
    text-align: left;
`;

interface Props {
  text: string,
}

const NotLoggedUserSingleFuncComponent = ({ text }: Props) => (
  <ListItemCustom>{text}</ListItemCustom>
);

export default NotLoggedUserSingleFuncComponent;
