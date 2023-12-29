import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import NavigationLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import adminActions from '../../actions/admin-actions';
import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import { ActionSuccessType, SIGN_IN } from '../../constants/redux-actions';
import { FORGOT_PASSWORD_PATH, ROOT_PATH } from '../../constants/route-paths';
import commonStyles from '../../styles/common';
import { getErrorMessage } from '../../utilities/message';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const commonClasses = commonStyles();

  const signInMutation = useMutation({
    mutationFn: async (data) => {
      const responseAction = await dispatch(adminActions.signIn(data));

      if (responseAction.type === ActionSuccessType(SIGN_IN)) {
        return responseAction;
      } else {
        throw responseAction.error.response;
      }
    },
    onSuccess: () => {
      toast.success('Sign in successfully!');
      navigate(ROOT_PATH);
    },
    onError: (data) => toast.error(getErrorMessage(data)),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    signInMutation.mutate(data);
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
          <FormControlLabel
            control={<Checkbox value='remember' name='session[rememberMe]' color='primary' />}
            label='Remember me'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} disabled={signInMutation.isPending}>
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
