import { SearchIcon } from '@chakra-ui/icons';
import {
  Center,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

function Header({ children, currentTenants }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Stack
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      w="100%"
      maxW="100%"
      p={6}
      direction={['column', 'row']}
    >
      <Center>
        <Heading as="h1" size="md" mx="auto" isTruncated>
          {children}
        </Heading>
      </Center>
      <Spacer />

      <Stack direction={['column', 'row']}>
        <Center mr={isLargerThan768 ? 4 : null}>
          <Text color="baselane.primaryText" isTruncated fontSize="sm" mr={4}>
            Current Tenants
          </Text>

          <Heading
            fontSize={24}
            as="h3"
            size="md"
            mr={isLargerThan768 ? 12 : null}
            color="baselane.primaryText"
          >
            {currentTenants}
          </Heading>
        </Center>
        <Center height="44px">
          {isLargerThan768 ? <Divider orientation="vertical" /> : null}

          <InputGroup ml={isLargerThan768 ? 12 : null}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="baselane.lightBlue" />}
            />
            <Input
              pr={24}
              type="tel"
              placeholder="Search Tenants"
              isTruncated
            />
          </InputGroup>
        </Center>
      </Stack>
    </Stack>
  );
}

export default Header;
