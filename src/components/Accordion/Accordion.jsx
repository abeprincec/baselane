import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function Accordion({ title, children, open }) {
  const [expand, setExpanded] = React.useState(false);

  React.useEffect(() => {
    if (open) setExpanded(true);
  }, [open]);
  return (
    <>
      <Box
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        boxShadow="sm"
        w="100%"
        p={4}
      >
        <Flex
          align="baseline"
          onClick={() => setExpanded(!expand)}
          sx={{ userSelect: 'none', cursor: 'pointer' }}
        >
          {expand ? (
            <Button variant="ghost">
              <TriangleDownIcon color="baselane.lightBlue"></TriangleDownIcon>
            </Button>
          ) : (
            <Button variant="ghost">
              <TriangleUpIcon color="baselane.lightBlue"></TriangleUpIcon>
            </Button>
          )}

          <Heading as="h2" size="md" color="baselane.primaryText" isTruncated>
            {title}
          </Heading>
        </Flex>
        {expand ? <Box pt={8}>{children}</Box> : null}
      </Box>
    </>
  );
}

export default Accordion;
