import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SidetimeLogo from '../../assets/sidetime-logo.svg?react';

import styles from './styles.module.scss';

const ResetPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      newPassword: data.get('newPassword'),
      confirmPassword: data.get('confirmPassword'),
    });
  };

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      maxWidth='xs'
    >
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 1,
        }}
      >
        <SidetimeLogo className={styles.logo_icon} />

        <Typography sx={{ mt: 2 }} variant='h4'>
          Reset Password
        </Typography>

        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: 1 }}>
          <TextField margin='normal' required fullWidth name='newPassword' label='New Password' type='password' />
          <TextField
            margin='normal'
            required
            fullWidth
            name='confirmPassword'
            label='Confirm Password'
            type='password'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Reset password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPassword;
