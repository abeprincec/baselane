import React from 'react';
import {
  ChakraProvider,
  Flex,
  VStack,
  Container,
  Stack,
  Box,
} from '@chakra-ui/react';
import theme from './theme';
import { Header } from './components/Header';
import { Accordion } from './components/Accordion';
import { Table } from './components/Table';
import Fonts from './fonts';
import {
  activeTenantsColumns,
  activeTenantsData,
  archivedTenantsColumns,
  archivedTenantsData,
} from './data';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container maxW="container.xl">
        <Box p={{ base: 2, md: 4 }}>
          <Header currentTenants={6}>Tenants Summary</Header>
        </Box>
        <Box p={{ base: 2, md: 4 }}>
          <Accordion title="Active Tenants" open>
            <Table columns={activeTenantsColumns} data={activeTenantsData} />
          </Accordion>
        </Box>
        <Box p={{ base: 2, md: 4 }}>
          <Accordion title="Archived Tenants">
            <Table
              columns={archivedTenantsColumns}
              data={archivedTenantsData}
            />
          </Accordion>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
