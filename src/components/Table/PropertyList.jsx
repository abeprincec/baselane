import { Box, Button, Text } from '@chakra-ui/react';

function PropertyList({ list }) {
  return (
    <>
      <Box>
        <Text
          sx={{ userSelect: 'none' }}
          isTruncated
          fontSize="xs"
          color="gray.300"
        >
          Property
        </Text>
        {list?.length > 0 ? (
          list.map((item, index) => (
            <Text mb={index === list.length ? null : 2}>{item?.name}</Text>
          ))
        ) : (
          <Text
            color="baselane.lightBlue"
            sx={{ userSelect: 'none' }}
            isTruncated
          >
            No Lease Record
          </Text>
        )}
      </Box>
      <Box>
        {list?.[0].continueLeaseSetUp ? (
          <Button
            mt="2"
            color="gray.400"
            fontWeight="normal"
            variant="outline"
            fontSize="sm"
          >
            Continue Lease Set Up
          </Button>
        ) : null}
        {list?.[0]?.duration ? (
          <Text
            fontSize="xs"
            sx={{ userSelect: 'none' }}
            isTruncated
            color="gray.300"
          >
            Lease Duration
          </Text>
        ) : null}

        {list?.map((item, index) => (
          <Text mb={index === list.length ? null : 2}>{item.duration} </Text>
        ))}
      </Box>
    </>
  );
}

export default PropertyList;
