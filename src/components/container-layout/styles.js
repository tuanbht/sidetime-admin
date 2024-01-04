import { useTheme } from '@mui/styles';

import useSibarMenuStyles from '../sidebar-menu/styles';

const useContainerLayoutStyles = () => {
  const theme = useTheme();
  const sibarMenuStyles = useSibarMenuStyles();

  return {
    mainContainer: {
      flexGrow: 1,
      p: 5,
      width: `calc(100% - ${sibarMenuStyles.drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        p: 2,
      },
    },
  };
};
export default useContainerLayoutStyles;
