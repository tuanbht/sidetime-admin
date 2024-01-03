import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  CONTENTS_PATH,
  GUIDES_PATH,
  PACKS_PATH,
  SCHEDULES_PATH,
  SESSIONS_PATH,
  USERS_PATH,
} from '../../constants/route-paths';
import useCommonStyles from '../../styles/common';

import useSibarMenuStyles from './styles';

const AdminMenuItems = ({ open }) => {
  const styles = useSibarMenuStyles(open);
  const commonStyles = useCommonStyles();

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
    <ListItem disablePadding sx={commonStyles.displayBlock} key={item.label}>
      <Link component={NavLink} to={item.to} sx={styles.menuLink}>
        <ListItemButton sx={styles.linkItemButton}>
          <ListItemIcon sx={styles.linkItemIcon}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} sx={styles.linkItemLabel} />
        </ListItemButton>
      </Link>
    </ListItem>
  ));
};

export default AdminMenuItems;
