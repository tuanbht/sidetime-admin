import { useTheme } from '@emotion/react';

const useTenantInfosStyles = () => {
  const theme = useTheme();

  return {
    headerBackground: {
      width: '100%',
      height: '320px',
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
    cardBlock: {
      height: '120px',
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    progressCircle: {
      width: '40px',
      height: '40px',
    },
    arrowIcon: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      '& svg': {
        width: '20px',
        height: '20px',
        color: theme.palette.hitGray,
      },
    },
    cardTitle: {
      fontSize: '16px',
      lineHeight: '28px',
      color: theme.palette.manatee,
    },
    cardSubtitle: {
      fontSize: '19px',
      lineHeight: '33px',
      fontWeight: '500',
      color: theme.palette.ebonyClay,
    },
  };
};

export default useTenantInfosStyles;
