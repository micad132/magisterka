import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RegisterLink = () => (
  <div data-testid="register-link"><ChakraLink as={Link} to="/register" data-test-id="register-link2">Nie posiadasz konta? <ExternalLinkIcon mx="2px" /></ChakraLink></div>
);

export default RegisterLink;
