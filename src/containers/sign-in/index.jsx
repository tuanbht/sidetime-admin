import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NavigationLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

import SidetimeLogo from '../../assets/sidetime-logo.svg?react';
import { FORGOT_PASSWORD_PATH } from '../../constants/route-paths';
import adminActions from '../../actions/admin-actions';

import styles from './styles.module.scss';

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(adminActions.signIn(data));
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
          Sidetime Login
        </Typography>

        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='session[email]'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='session[password]'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <NavigationLink component={Link} to={FORGOT_PASSWORD_PATH} variant='body2'>
                Forgot password?
              </NavigationLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
