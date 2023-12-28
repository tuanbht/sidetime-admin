import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import NavigationLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';

import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import { SIGN_IN_PATH } from '../../constants/route-paths';
import AxiosClient from '../../configurations/api-client';
import { API_PASSWORD } from '../../constants/api-paths';
import { getErrorMessage } from '../../utilities/message';
import commonStyles from '../../styles/common';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const commonClasses = commonStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    AxiosClient.post(API_PASSWORD, { admin: { email: data.get('email') } })
      .then(() => {
        toast.success('You will receive an email with instructions on how to reset your password in a few minutes.');
        navigate(SIGN_IN_PATH);
      })
      .catch((error) => toast.error(getErrorMessage(error.response)));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
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
        <SidetimeLogo className={commonClasses.logoIcon} />

        <Typography sx={{ mt: 2 }} variant='h4'>
          Forgot Password?
        </Typography>

        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Send
          </Button>
          <Grid container>
            <Grid item xs>
              <NavigationLink component={Link} to={SIGN_IN_PATH} variant='body2'>
                Sign in
              </NavigationLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
