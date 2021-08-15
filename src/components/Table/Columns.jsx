import { Box, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

const Columns = ({ headers }) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  if (!isLargerThan768) return null;
  return (
    <Stack px={6} pb={2} w="100%" direction="row">
      <Box w="80px" />
      {headers.map(header => (
        <Text
          key={header}
          fontSize="xs"
          color="gray.400"
          sx={{ userSelect: 'none' }}
          flex="1"
        >
          {header}
        </Text>
      ))}
      <Box w="56px" />
    </Stack>
  );
};

export default Columns;
