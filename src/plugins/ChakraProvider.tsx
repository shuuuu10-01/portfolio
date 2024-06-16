import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';

const { Button, Modal } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Modal,
  },
  semanticTokens: {
    colors: {
      primary: '#3997d1',
      error: 'red.500',
      text: {
        default: 'gray.900',
      },
    },
    styles: {
      global: {
        body: {
          bg: '#fff',
        },
      },
    },
  },
  fonts: {
    body: '"Roboto Mono", sans-serif',
  },
});

function ChakraProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraBaseProvider resetCSS theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
}

export default ChakraProvider;
