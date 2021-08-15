import React from 'react';
import {
  Box,
  Flex,
  Text,
  Icon,
  Divider,
  Button,
  Stack,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { GoKebabVertical } from 'react-icons/go';
import { useMediaQuery } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import Columns from './Columns';
import TagList from './TagList';
import PropertyList from './PropertyList';
import PropertyTags from './PropertyTags';
import { Drawer } from '../Drawer';
import { Form } from '../Form';
function Table({ columns, data }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [tableData, setTableData] = React.useState(null);

  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  const toggleExpand = id => {
    const newData = tableData.map(item => {
      return {
        ...item,
        isExpanded: item.id === id ? !item.isExpanded : item.isExpanded,
      };
    });
    setTableData(newData);
  };

  return (
    <Box>
      <Columns headers={columns} />
      <Box>
        {tableData?.map(row => {
          return (
            <Box
              border="1px"
              borderRadius="8px"
              borderColor="gray.200"
              mb={6}
              p={6}
            >
              <Stack align="center" direction={['column', 'row']}>
                {row.isExpanded ? (
                  <Button
                    onClick={() => toggleExpand(row.id)}
                    w="80px"
                    variant="ghost"
                  >
                    <TriangleDownIcon w="80px" color={'baselane.lightBlue'} />
                  </Button>
                ) : (
                  <Button
                    onClick={() => toggleExpand(row.id)}
                    w="80px"
                    variant="ghost"
                  >
                    <TriangleUpIcon w="80px" color={'baselane.lightBlue'} />
                  </Button>
                )}
                <Text flex="1">{row.contactName}</Text>
                <Text
                  flex="1"
                  fontSize="sm"
                  color="baselane.secondaryText"
                  isTruncated
                >
                  {row.contactEmail}
                </Text>
                <Text flex="1" fontSize="sm" color="baselane.secondaryText">
                  {row.contactNumber}
                </Text>
                {row.accountStatuses ? (
                  <Box flex="1">
                    <TagList list={row.accountStatuses} />
                  </Box>
                ) : null}
                <Button variant="ghost" onClick={onOpen}>
                  <Icon
                    as={GoKebabVertical}
                    w={6}
                    h={6}
                    color={'baselane.lightBlue'}
                  />
                </Button>
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <Form />
                </Drawer>
              </Stack>
              {row.isExpanded ? (
                <>
                  <Divider mt={8} />
                  <Flex direction={isLargerThan768 ? 'row' : 'column'}>
                    <Flex p={[2, 4]} ml={isLargerThan768 ? 16 : null} w="80%">
                      <Stack
                        pt={2}
                        ml={isLargerThan768 ? 12 : null}
                        direction={['column', 'row']}
                        spacing={{ base: 2, md: 8, lg: 40 }}
                      >
                        <PropertyList list={row.property} />
                      </Stack>
                    </Flex>
                    {row.propertyTags ? (
                      <Stack direction={'column'}>
                        <PropertyTags list={row.propertyTags} />
                      </Stack>
                    ) : null}
                  </Flex>
                </>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Table;
