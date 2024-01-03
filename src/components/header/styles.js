import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/styles';

const useHeaderStyles = () => {
  const theme = useTheme();

  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(2, 4),
      backgroundColor: theme.palette.common.white,

      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1, 2),
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      flex: 1,
      marginRight: theme.spacing(2),
    },
    searchIconWrapper: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchInput: {
      width: '100%',
      '& .MuiInputBase-input': {
        border: `1px solid ${theme.palette.athensGray}`,
        borderRadius: '8px',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
          width: '90%',
          '&:focus': {
            width: '100%',
          },
        },
      },
    },
    avatarButton: { mr: 2 },
    defaultAvatar: {
      width: '100%',
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    userName: {
      color: theme.palette.ebonyClay,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.subtitle1,
      },
    },
    userRole: {
      color: theme.palette.manatee,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.body2,
      },
    },
  };
};
export default useHeaderStyles;
