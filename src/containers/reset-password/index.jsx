import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import SidetimeLogo from '../../assets/images/sidetime-logo.svg?react';
import adminActions from '../../actions/admin-actions';
import { ActionSuccessType, RESET_PASSWORD } from '../../constants/redux-actions';
import { getErrorMessage } from '../../utilities/message';
import { ROOT_PATH } from '../../constants/route-paths';
import commonStyles from '../../styles/common';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const commonClasses = commonStyles();

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
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={resetPasswordMutation.isPending}
          >
            Reset password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResetPassword;
