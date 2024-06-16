import {
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';

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
            _hover={{ backgroundColor: '#fff' }}>
            Articles
          </Button>
        </HStack>
      </HStack>
      <Modal isOpen={isOpenProducts} onClose={() => setIsOpenProducts(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Products</ModalHeader>
          <ModalBody>aaa</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Header;
