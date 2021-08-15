import { Flex, Divider } from '@chakra-ui/react';
import TagList from './TagList';
import { useMediaQuery } from '@chakra-ui/react';

function PropertyTags({ list }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Flex pos="relative" h="110%">
        {isLargerThan768 ? (
          <Divider pos="absolute" top="8px" orientation="vertical" />
        ) : null}

        <Flex
          mt="auto"
          mb="auto"
          ml={isLargerThan768 ? '24px' : null}
          direction="row"
        >
          <TagList list={list} />
        </Flex>
      </Flex>
    </>
  );
}

export default PropertyTags;
