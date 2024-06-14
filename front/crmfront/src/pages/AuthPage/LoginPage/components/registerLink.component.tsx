import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RegisterLink = () => (
  <div><ChakraLink as={Link} to="/register">Nie posiadasz konta? <ExternalLinkIcon mx="2px" /></ChakraLink></div>
);

export default RegisterLink;
