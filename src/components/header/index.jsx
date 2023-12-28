import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

import defaultAvatarUrl from '../../assets/images/default-avatar.png';

import headerStyles from './styles';

const Header = () => {
  const classes = headerStyles();

  const { user } = {
    user: { name: 'Admin Name', role: 'Program Admin' },
  };

  return (
    <header className={classes.header}>
      <div className={classes.search}>
        <div className={classes.searchIconWrapper}>
          <SearchIcon />
        </div>
        <InputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} className={classes.searchInput} />
      </div>
      <Avatar src={user.avatar} alt='User Avatar' className={classes.avatar}>
        <img src={defaultAvatarUrl} className={classes.defaultAvatar} />
      </Avatar>
      <div className={classes.userInfo}>
        <Typography variant='h6' className={classes.userName}>
          {user.name}
        </Typography>
        <Typography variant='body2' className={classes.userRole}>
          {user.role}
        </Typography>
      </div>
    </header>
  );
};

export default Header;
