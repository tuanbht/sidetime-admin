import { useTheme } from '@mui/styles';

const useContainerLayoutStyles = () => {
  const theme = useTheme();

  return {
    mainContainer: {
      flexGrow: 1,
      p: 5,
      width: 'calc(100% - 240px)',
      [theme.breakpoints.down('md')]: {
        p: 2,
      },
    },
  };
};
export default useContainerLayoutStyles;
