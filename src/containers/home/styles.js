import { useTheme } from '@mui/styles';

const useHomeStyles = () => {
  const theme = useTheme();

  return {
    container: {},
    headerBackground: {
      width: 1,
      height: '360px',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      objectFit: 'cover',
    },
    tenantNameBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: theme.spacing(4, 0),
    },
    siteName: {
      fontWeight: 'bold',
      color: theme.palette.common.white,

      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.h4,
      },
    },
    filterredYear: {
      color: theme.palette.common.white,
      boxShadow: 'unset',
    },
    yearLabel: {
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.body1,
      },
    },
    selectYearButton: {
      background: 'transparent',

      '&:hover': {
        background: 'transparent',
      },
    },
  };
};

export default useHomeStyles;
