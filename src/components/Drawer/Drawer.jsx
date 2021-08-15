import {
  Box,
  Button,
  Drawer as DrawerChakra,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
} from '@chakra-ui/react';
import React from 'react';

function Drawer({ onClose, isOpen, children }) {
  return (
    <DrawerChakra placement="right" onClose={onClose} isOpen={isOpen} size="xl">
      <DrawerOverlay bg="baselane.blueAlpha" />
      <DrawerContent>
        <DrawerHeader
          bg="#032765"
          color="white"
          fontSize="sm"
          fontWeight="medium"
          borderBottomWidth="1px"
          p={6}
        >
          Edit Tenant
        </DrawerHeader>
        <DrawerCloseButton color="white" mt={2} />

        <DrawerBody p={8}>
          <Heading color="baselane.blue" fontSize="lg">
            Tenant Details
          </Heading>
          <Box mt={8}>{children}</Box>
        </DrawerBody>
        <DrawerFooter
          justifyContent="flex-start"
          sx={{ boxShadow: '100px -15px 200px -20px #00000040;' }}
        >
          <Button
            variant="outline"
            mr={3}
            fontWeight="normal"
            fontSize="small"
            onClick={onClose}
            color="baselane.lightBlue"
          >
            Cancel
          </Button>
          <Button
            fontWeight="normal"
            fontSize="small"
            colorScheme="blue"
            bg="#0066ff"
            _hover={{ bg: '#004bbd' }}
          >
            Save &amp; Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerChakra>
  );
}

export default Drawer;
