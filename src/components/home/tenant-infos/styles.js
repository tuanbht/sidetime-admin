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
      fontweight: 'bold',
      color: theme.palette.common.white,
    },
    filterredYear: {
      color: theme.palette.common.white,
      boxShadow: 'unset',
    },
    selectYearButton: {
      background: 'transparent',

      '&:hover': {
        background: 'transparent',
      },
    },
    cardBlock: {
      width: '230px',
      maxWidth: '100%',
      height: '120px',
      minHeight: '100%',
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    progressCircle: {
      width: '50px',
      height: '50px',
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
      width: '50px',
      height: '50px',
      '& svg': {
        width: '30px',
        height: '30px',
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
