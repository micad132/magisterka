import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { mount } from 'cypress/react';

// Utwórz funkcję pomocniczą do montowania komponentów Chakra
export const mountWithChakra = (component: React.ReactNode) => {
    return mount(
        <ChakraProvider>
            {component}
        </ChakraProvider>
    );
};
