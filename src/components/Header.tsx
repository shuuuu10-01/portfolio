import { Button, HStack, Image } from '@chakra-ui/react';
import { useState } from 'react';

import ArticlesModal from './ArticlesModal';
import ProductsModal from './ProductsModal';

function Header() {
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenArticles, setIsOpenArticles] = useState(false);
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
        <Image width="50px" src="/assets/logo.png"></Image>
        <HStack gap={0}>
          <Button
            className="button"
            color="primary"
            colorScheme="primary"
            variant="ghost"
            border="none"
            borderRadius={0}
            outline="none"
            _hover={{ backgroundColor: '#fff' }}
            onClick={() => setIsOpenProducts(true)}>
            Products
          </Button>
          <Button
            className="button"
            color="primary"
            variant="ghost"
            border="none"
            borderRadius={0}
            _hover={{ backgroundColor: '#fff' }}
            onClick={() => setIsOpenArticles(true)}>
            Articles
          </Button>
        </HStack>
      </HStack>
      <ProductsModal isOpen={isOpenProducts} onClose={() => setIsOpenProducts(false)} />
      <ArticlesModal isOpen={isOpenArticles} onClose={() => setIsOpenArticles(false)} />
    </>
  );
}

export default Header;
