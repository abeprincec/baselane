import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'GraphikHeading',
    body: 'Graphik',
  },
  colors: {
    baselane: {
      bg: '#f7f9fd',
      blue: '#002261',
      blueAlpha: '#00226129',
      lightBlue: '#687da3',
      white: '#fff',
      primaryText: '#042765',
      secondaryText: '#304d80',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'baselane.bg',
        color: 'baselane.blue',
      },
    },
  },
});
export default theme;
