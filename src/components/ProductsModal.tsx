import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { ComponentPropsWithoutRef } from 'react';

function ProductsModal({ ...props }: Omit<ComponentPropsWithoutRef<typeof Modal>, 'children'>) {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Products</ModalHeader>
        <ModalBody>aaa</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProductsModal;
