import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import { ROOT_PATH } from '../../constants/route-paths';

import AdminMenuItems from './admin-menu-items';
import SiteMenuItems from './site-menu-items';
import useSibarMenuStyles from './styles';

const SidebarMenu = ({ children }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.up('md'));
  const sideBarMenuStyles = useSibarMenuStyles(open);

  useEffect(() => setOpen(isMobile), [isMobile]);

  const handleMenuIconClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={sideBarMenuStyles.boxContainer}>
      <CssBaseline />

      <Drawer variant='permanent' sx={sideBarMenuStyles.drawer}>
        <Box sx={sideBarMenuStyles.drawerHeader}>
          {open && <Icon component={SidetimeLogo} sx={sideBarMenuStyles.logo} />}
          <IconButton onClick={handleMenuIconClick}>{open ? <ChevronLeftIcon /> : <MenuIcon />}</IconButton>
        </Box>
        <Divider />
        <List>
          <Typography sx={sideBarMenuStyles.menuGroupTitle}>Home</Typography>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link component={NavLink} to={ROOT_PATH} sx={sideBarMenuStyles.menuLink}>
              <ListItemButton sx={sideBarMenuStyles.linkItemButton}>
                <ListItemIcon sx={sideBarMenuStyles.linkItemIcon}>
                  <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <Typography sx={sideBarMenuStyles.menuGroupTitle}>Admin</Typography>
          <AdminMenuItems open={open} />
        </List>
        <Divider />
        <List>
          <Typography sx={sideBarMenuStyles.menuGroupTitle}>Sites</Typography>
          <SiteMenuItems open={open} />
        </List>
      </Drawer>
      {children}
    </Box>
  );
};

SidebarMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarMenu;
