import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import React from 'react';
import { Accordion } from './components/Accordion';
import { Header } from './components/Header';
import { Table } from './components/Table';
import {
  activeTenantsColumns,
  activeTenantsData,
  archivedTenantsColumns,
  archivedTenantsData,
} from './data';
import Fonts from './fonts';
import theme from './theme';
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
