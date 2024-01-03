import { createTheme } from '@mui/material/styles';

import '@fontsource-variable/inter';

const theme = createTheme({
  typography: {
    fontFamily: ["'Inter Variable'", 'sans-serif'].join(','),
  },
  palette: {
    cobalt: '#0048B2',
    dodgerBlue: '#3B8AFF',
    manatee: '#8A92A6',
    ebonyClay: '#232D42',
    athensGray: '#E9ECEF',
    hitGray: '#ADB5BD',
    royalBlue: {
      main: '#3A57E8',
      hover: '#3a57e84d',
    },
    whisper: '#F5F6FA',
    background: {
      default: '#E9ECEF',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default theme;
