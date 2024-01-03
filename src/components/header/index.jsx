import Logout from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import defaultAvatarUrl from '../../assets/images/default-avatar.png';
import { SIGN_OUT_PATH } from '../../constants/route-paths';
import { adminSelector } from '../../selectors/admin-selector';

import useHeaderStyles from './styles';

const Header = () => {
  const styles = useHeaderStyles();

  const admin = useSelector(adminSelector);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickAvatar = (event) => setAnchorEl(event.currentTarget);

  const handleCloseAvatarMenu = () => setAnchorEl(null);

  return (
    <Paper component='header' sx={styles.header}>
      <Box sx={styles.search}>
        <Box sx={styles.searchIconWrapper}>
          <SearchIcon />
        </Box>
        <InputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} sx={styles.searchInput} />
      </Box>
      <Tooltip title='Account settings'>
        <IconButton
          onClick={handleClickAvatar}
          size='small'
          sx={styles.avatarButton}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar src={admin.avatar} alt='Admin Avatar'>
            <Box component='img' src={defaultAvatarUrl} sx={styles.defaultAvatar} />
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={Boolean(anchorEl)}
        onClose={handleCloseAvatarMenu}
        onClick={handleCloseAvatarMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={Link} to={SIGN_OUT_PATH} onClick={handleCloseAvatarMenu}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <Box sx={styles.userInfo}>
        <Typography variant='h6' sx={styles.userName}>
          {admin.name}
        </Typography>
        <Typography variant='subtitle1' sx={styles.userRole}>
          {admin.role || 'Admin'}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Header;
