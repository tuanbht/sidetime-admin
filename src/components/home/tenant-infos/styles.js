import { useTheme } from '@emotion/react';

const useTenantInfosStyles = () => {
  const theme = useTheme();

  return {
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
