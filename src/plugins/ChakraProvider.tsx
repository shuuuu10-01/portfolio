import { ChakraBaseProvider, extendBaseTheme, Button, IconButton, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';

const theme = extendBaseTheme({
  components: {
    Button,
    IconButton,
    Icon,
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
});

function ChakraProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraBaseProvider resetCSS theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
}

export default ChakraProvider;
