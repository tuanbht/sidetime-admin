import Logout from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import defaultAvatarUrl from '../../assets/images/default-avatar.png';
import { SIGN_OUT_PATH } from '../../constants/route-paths';
import { adminSelector } from '../../selectors/admin-selector';

import headerStyles from './styles';

const Header = () => {
  const classes = headerStyles();

  const admin = useSelector(adminSelector);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickAvatar = (event) => setAnchorEl(event.currentTarget);

  const handleCloseAvatarMenu = () => setAnchorEl(null);

  return (
    <Paper component='header' className={classes.header}>
      <div className={classes.search}>
        <div className={classes.searchIconWrapper}>
          <SearchIcon />
        </div>
        <InputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} className={classes.searchInput} />
      </div>
      <Tooltip title='Account settings'>
        <IconButton
          onClick={handleClickAvatar}
          size='small'
          sx={{ mr: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar src={admin.avatar} alt='Admin Avatar'>
            <img src={defaultAvatarUrl} className={classes.defaultAvatar} />
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

      <div className={classes.userInfo}>
        <Typography variant='h6' className={classes.userName}>
          {admin.name}
        </Typography>
        <Typography variant='body2' className={classes.userRole}>
          {admin.role || 'Admin'}
        </Typography>
      </div>
    </Paper>
  );
};

export default Header;
