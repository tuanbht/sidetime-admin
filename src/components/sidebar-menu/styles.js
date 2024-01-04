import { useTheme } from '@mui/styles';
import { useMemo } from 'react';

import useCommonStyles from '../../styles/common';

const useSibarMenuStyles = (open) => {
  const theme = useTheme();
  const commonStyles = useCommonStyles();

  const drawerWidth = 240;

  const openedMixin = useMemo(
    () => ({
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    }),
    [theme],
  );

  const closedMixin = useMemo(
    () => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
    }),
    [theme],
  );

  return {
    boxContainer: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin,
        '& .MuiDrawer-paper': openedMixin,
      }),
      ...(!open && {
        ...closedMixin,
        '& .MuiDrawer-paper': closedMixin,
      }),
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    logo: {
      ...commonStyles.logoIcon,
      marginBottom: theme.spacing(1),
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    menuGroupTitle: {
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: 'bold',
      color: theme.palette.hitGray,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
      opacity: open ? 1 : 0,
    },
    menuLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.manatee,
      margin: open ? theme.spacing(0, 2) : 'unset',
      borderRadius: theme.spacing(1),
      '&:hover': {
        backgroundColor: theme.palette.royalBlue.hover,
      },
      '&.active': {
        backgroundColor: theme.palette.royalBlue.main,
        color: theme.palette.common.white,

        '& svg': {
          fill: theme.palette.common.white,
        },
      },
    },
    linkItemButton: {
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    },
    linkItemIcon: {
      minWidth: 0,
      mr: open ? 3 : 'auto',
      justifyContent: 'center',
    },
    linkItemLabel: {
      opacity: open ? 1 : 0,
      '& span': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  };
};

export default useSibarMenuStyles;
