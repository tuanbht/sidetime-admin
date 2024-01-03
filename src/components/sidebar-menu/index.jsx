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
import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import { ROOT_PATH } from '../../constants/route-paths';
import useCommonStyles from '../../styles/common';

import AdminMenuItems from './admin-menu-items';
import SiteMenuItems from './site-menu-items';
import useSibarMenuStyles from './styles';

const SidebarMenu = ({ children }) => {
  const theme = useTheme();
  const commonStyles = useCommonStyles();

  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.up('md'));
  const styles = useSibarMenuStyles(open);

  useLayoutEffect(() => setOpen(isMobile), [isMobile]);

  const handleMenuIconClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.boxContainer}>
      <CssBaseline />

      <Drawer variant='permanent' sx={styles.drawer}>
        <Box sx={styles.drawerHeader}>
          {open && <Icon component={SidetimeLogo} sx={styles.logo} />}
          <IconButton onClick={handleMenuIconClick}>{open ? <ChevronLeftIcon /> : <MenuIcon />}</IconButton>
        </Box>
        <Divider />
        <List>
          <Typography sx={styles.menuGroupTitle}>Home</Typography>
          <ListItem disablePadding sx={commonStyles.displayBlock}>
            <Link component={NavLink} to={ROOT_PATH} sx={styles.menuLink}>
              <ListItemButton sx={styles.linkItemButton}>
                <ListItemIcon sx={styles.linkItemIcon}>
                  <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' sx={styles.linkItemLabel} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <Typography sx={styles.menuGroupTitle}>Admin</Typography>
          <AdminMenuItems open={open} />
        </List>
        <Divider />
        <List>
          <Typography sx={styles.menuGroupTitle}>Sites</Typography>
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
