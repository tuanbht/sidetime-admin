import { useTheme } from '@mui/styles';

const useForgotPasswordStyles = () => {
  const theme = useTheme();

  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '100vh',
    },
    forgotPasswordContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 1,
      p: 4,
      backgroundColor: theme.palette.common.white,
    },
    title: { mt: 2 },
    formContainer: { mt: 1, width: 1 },
    submitButton: { mt: 3, mb: 2 },
  };
};

export default useForgotPasswordStyles;
