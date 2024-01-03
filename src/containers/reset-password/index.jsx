import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import adminActions from '../../actions/admin-actions';
import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import { CURRENT_ADMIN } from '../../constants/query-keys';
import { ActionSuccessType, RESET_PASSWORD } from '../../constants/redux-actions';
import { ROOT_PATH } from '../../constants/route-paths';
import useCommonStyles from '../../styles/common';
import { getErrorMessage } from '../../utilities/message';

import useResetPasswordStyles from './styles';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const commonStyles = useCommonStyles();
  const styles = useResetPasswordStyles();

  const [searchParams] = useSearchParams();

  const resetPasswordMutation = useMutation({
    mutationFn: async ({ token, newPassword, confirmPassword }) => {
      const responseAction = await dispatch(adminActions.resetPassword(token, newPassword, confirmPassword));

      if (responseAction.type === ActionSuccessType(RESET_PASSWORD)) {
        return responseAction;
      } else {
        throw responseAction.error.response;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_ADMIN] });

      toast.success('Reset password successfully!');
      navigate(ROOT_PATH);
    },
    onError: (data) => toast.error(getErrorMessage(data)),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    resetPasswordMutation.mutate({
      token: searchParams.get('token'),
      newPassword: data.get('newPassword'),
      confirmPassword: data.get('confirmPassword'),
    });
  };

  return (
    <Container sx={styles.container} maxWidth='xs'>
      <CssBaseline />
      <Paper sx={styles.resetPasswordContainer} elevation={8}>
        <Icon component={SidetimeLogo} sx={commonStyles.logoIcon} />
        <Typography sx={styles.title} variant='h4'>
          Reset Password
        </Typography>

        <Box component='form' onSubmit={handleSubmit} noValidate sx={styles.formContainer}>
          <TextField margin='normal' required fullWidth name='newPassword' label='New Password' type='password' />
          <TextField
            margin='normal'
            required
            fullWidth
            name='confirmPassword'
            label='Confirm Password'
            type='password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={styles.submitButton}
            disabled={resetPasswordMutation.isPending}
          >
            Reset password
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
