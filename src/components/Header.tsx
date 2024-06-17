import { Button, HStack, Image } from '@chakra-ui/react';
import { useState } from 'react';

import ProductsModal from './ProductsModal';

function Header() {
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  return (
    <>
      <HStack
        as="header"
        position="fixed"
        top={0}
        paddingX="20px"
        paddingTop="10px"
        justifyContent="space-between"
        width="100dvw"
        zIndex={2}>
        <Image width="50px" borderRadius="full" src="/assets/logo.png"></Image>
        <Button
          className="button"
          color="primary"
          variant="ghost"
          borderRadius={0}
          fontFamily="Roboto Mono"
          _hover={{ backgroundColor: '#fff' }}
          onClick={() => setIsOpenProducts(true)}>
          Products
        </Button>
      </HStack>
      <ProductsModal isOpen={isOpenProducts} onClose={() => setIsOpenProducts(false)} />
    </>
  );
}

export default Header;
