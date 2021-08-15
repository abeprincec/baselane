import {
  Tag as ChakraTag,
  TagLabel,
  TagLeftIcon,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { TiWarningOutline } from 'react-icons/ti';

function Tag({ children, label, ...props }) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const getColors = label => {
    switch (label) {
      case 'Invite Sent': {
        return {
          color: '#0367ff',
          bg: '#e5f0fe',
        };
      }
      case 'Resend': {
        return {
          color: '#b2bdcf',
          bg: '#fff',
          boxShadow: 'inset 0 0 0px 2px #c0c9d8',
        };
      }

      case 'Archive': {
        return {
          color: '#b2bdcf',
          bg: '#fff',
          boxShadow: 'inset 0 0 0px 2px #c0c9d8',
        };
      }
      case 'No Invite Sent': {
        return {
          color: '#946815',
          bg: '#fdf7e5',
        };
      }
      case 'No Active Lease': {
        return {
          color: '#946815',
          bg: '#fdf7e5',
        };
      }
      case 'Active': {
        return {
          color: '#2f871f',
          bg: '#e8f1e7',
        };
      }
      default: {
        return {
          color: '#b2bdcf',
          bg: '#fff',
          boxShadow: 'inset 0 0 0px 2px #c0c9d8',
        };
      }
    }
  };

  const getIcon = label => {
    if (label === 'Invite Sent') {
      return <TagLeftIcon as={MdMailOutline} />;
    }
    if (label === 'Resend') {
      return null;
    }
    if (label === 'No Invite Sent' || label === 'No Active Lease') {
      return <TagLeftIcon as={TiWarningOutline} />;
    }

    if (label === 'Active') {
      return <TagLeftIcon as={FiCheck} />;
    }
    return null;
  };

  return (
    <ChakraTag
      size="lg"
      px={{ base: 2, md: 4 }}
      py={{ base: 1, md: 2 }}
      fontSize={isLargerThan768 ? 'md' : 'sm'}
      fontWeight={isLargerThan768 ? 'small' : 'medium'}
      {...getColors(label)}
      sx={{ userSelect: 'none' }}
      {...props}
    >
      {getIcon(label) ? getIcon(label) : null}
      <TagLabel>{label}</TagLabel>
    </ChakraTag>
  );
}

export default Tag;
