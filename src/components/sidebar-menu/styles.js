import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/styles';
import { NavLink } from 'react-router-dom';

import SidetimeLogoSvg from '../../assets/images/sidetime-logo.svg?react';

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

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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
}));

export const SidetimeLogo = styled(SidetimeLogoSvg)(({ theme }) => ({
  width: '120px',
  height: 'auto',
  marginBottom: theme.spacing(1),
  marginRight: 'auto',
  marginLeft: 'auto',
}));

export const MenuLink = styled(NavLink, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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
}));
