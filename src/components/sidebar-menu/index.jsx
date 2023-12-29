import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import {
  CONTENTS_PATH,
  GUIDES_PATH,
  PACKS_PATH,
  ROOT_PATH,
  SCHEDULES_PATH,
  SESSIONS_PATH,
  USERS_PATH,
} from '../../constants/route-paths';

import { Drawer, DrawerHeader, MenuLink, SidetimeLogo } from './styles';

const SidebarMenu = ({ children }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(true);

  const handleMenuIconClick = () => {
    setOpen(!open);
  };

  const renderAdminMenuItems = useCallback(() => {
    const menuItems = [
      {
        label: 'Contents',
        icon: <ArticleIcon />,
        to: CONTENTS_PATH,
      },
      {
        label: 'Users',
        icon: <GroupsIcon />,
        to: USERS_PATH,
      },
      {
        label: 'Guides',
        icon: <GroupsIcon />,
        to: GUIDES_PATH,
      },
      {
        label: 'Sessions',
        icon: <AccountBalanceWalletIcon />,
        to: SESSIONS_PATH,
      },
      {
        label: 'Packs',
        icon: <AccountBalanceWalletIcon />,
        to: PACKS_PATH,
      },
      {
        label: 'Schedules',
        icon: <CalendarMonthIcon />,
        to: SCHEDULES_PATH,
      },
    ];

    return menuItems.map((item) => (
      <ListItem disablePadding sx={{ display: 'block' }} key={item.label}>
        <MenuLink to={item.to} open={open}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </MenuLink>
      </ListItem>
    ));
  }, [open]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          {open && <SidetimeLogo />}
          <IconButton onClick={handleMenuIconClick}>{open ? <ChevronLeftIcon /> : <MenuIcon />}</IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Typography
            sx={{
              fontSize: '16px',
              lineHeight: '28px',
              fontWeight: 'bold',
              color: theme.palette.hitGray,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              opacity: open ? 1 : 0,
            }}
          >
            Home
          </Typography>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <MenuLink to={ROOT_PATH} open={open}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </MenuLink>
          </ListItem>
        </List>
        <Divider />
        <List>
          <Typography
            sx={{
              fontSize: '16px',
              lineHeight: '28px',
              fontWeight: 'bold',
              color: theme.palette.hitGray,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              opacity: open ? 1 : 0,
            }}
          >
            Admin
          </Typography>
          {renderAdminMenuItems()}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

SidebarMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarMenu;
