import { createTheme } from '@mui/material';

// font is not working
import InterFonts from '../assets/fonts/inter-fonts.ttf';

export const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Arial'].join(','),
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${InterFonts}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
            U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
