import { useTheme } from '@emotion/react';

const useTopGuidesStyles = () => {
  const theme = useTheme();

  return {
    container: { mt: 10 },
    titleContainer: {
      padding: theme.spacing(3),
    },
    title: {
      fontWeight: 500,
      marginBottom: theme.spacing(1),
      color: theme.palette.ebonyClay,
    },
    subtitle: {
      color: theme.palette.manatee,
    },
    userAvatar: {
      '& img': {
        width: '40px',
        height: '40px',
      },
    },
    tableHeader: {
      backgroundColor: theme.palette.whisper,
      '& th': {
        color: theme.palette.manatee,
      },
    },
    tableRow: { '&:last-child td, &:last-child th': { border: 0 } },
    tableGuideCol: {
      display: 'flex',
      alignItems: 'center',
      '& p': {
        marginLeft: theme.spacing(2),
      },
    },
    avatarGroup: {
      cursor: 'pointer',
    },
    usersModal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 320,
      maxHeight: 840,
      bgcolor: 'background.paper',
      borderRadius: '8px',
      boxShadow: 24,
      p: 4,
      '&:focus-visible': {
        outline: 'none',
      },
      overflowY: 'auto',
    },
    modalTitle: {
      marginBottom: theme.spacing(2),
    },
    modalUserContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      '& p': {
        marginLeft: theme.spacing(2),
      },
    },
  };
};

export default useTopGuidesStyles;
