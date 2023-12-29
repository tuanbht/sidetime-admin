import { useTheme } from '@mui/styles';

const useSibarMenuStyles = (open) => {
  const theme = useTheme();

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

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
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
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
      width: '120px',
      height: 'auto',
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
  };
};

export default useSibarMenuStyles;
