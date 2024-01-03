import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import NavigationLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import adminActions from '../../actions/admin-actions';
import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import { CURRENT_ADMIN } from '../../constants/query-keys';
import { ActionSuccessType, SIGN_IN } from '../../constants/redux-actions';
import { FORGOT_PASSWORD_PATH, ROOT_PATH } from '../../constants/route-paths';
import useCommonStyles from '../../styles/common';
import { getErrorMessage } from '../../utilities/message';

import useSignInStyles from './styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const commonClasses = useCommonStyles();
  const styles = useSignInStyles();

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
      queryClient.invalidateQueries({ queryKey: [CURRENT_ADMIN] });

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
    <Container sx={styles.container} maxWidth='xs'>
      <CssBaseline />
      <Paper sx={styles.signInContainer} elevation={8}>
        <Icon component={SidetimeLogo} sx={commonClasses.logoIcon} />

        <Typography sx={styles.title} variant='h4'>
          Sidetime Login
        </Typography>

        <Box component='form' onSubmit={handleSubmit} noValidate sx={styles.formContainer}>
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
            control={<Checkbox value='true' name='session[rememberMe]' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={styles.submitButton}
            disabled={signInMutation.isPending}
          >
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
      </Paper>
    </Container>
  );
};

export default SignIn;
