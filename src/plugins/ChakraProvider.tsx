import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import { Button } from '@chakra-ui/theme/components';
import { ReactNode } from 'react';

const theme = extendBaseTheme({
  components: {
    Button,
  },
  semanticTokens: {
    colors: {
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
