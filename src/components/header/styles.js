import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    backgroundColor: theme.palette.common.white,
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
  defaultAvatar: {
    width: '100%',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: '16px',
    lineHeight: '28px',
    color: theme.palette.ebonyClay,
  },
  userRole: {
    fontSize: '13px',
    lineHeight: '19px',
    color: theme.palette.manatee,
  },
}));
