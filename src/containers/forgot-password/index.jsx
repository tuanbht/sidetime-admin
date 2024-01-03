import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import NavigationLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import ApiClient from '../../configurations/api-client';
import { API_PASSWORD } from '../../constants/api-paths';
import { SIGN_IN_PATH } from '../../constants/route-paths';
import useCommonStyles from '../../styles/common';
import { getErrorMessage } from '../../utilities/message';

import useForgotPasswordStyles from './styles';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const commonStyles = useCommonStyles();
  const styles = useForgotPasswordStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    ApiClient.post(API_PASSWORD, data)
      .then(() => {
        toast.success('You will receive an email with instructions on how to reset your password in a few minutes.');
        navigate(SIGN_IN_PATH);
      })
      .catch((error) => toast.error(getErrorMessage(error.response)));
  };

  return (
    <Container sx={styles.container} maxWidth='xs'>
      <CssBaseline />
      <Paper sx={styles.forgotPasswordContainer}>
        <Icon component={SidetimeLogo} sx={commonStyles.logoIcon} />

        <Typography sx={styles.title} variant='h4'>
          Forgot Password?
        </Typography>

        <Box component='form' onSubmit={handleSubmit} noValidate sx={styles.formContainer}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='admin[email]'
            autoComplete='email'
            autoFocus
          />
          <Button type='submit' fullWidth variant='contained' sx={styles.submitButton}>
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
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
