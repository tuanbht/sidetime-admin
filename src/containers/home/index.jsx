import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import headerBackgroundUrl from '../../assets/images/dashboard-header-bg.svg';
import { SIGN_IN_PATH, SIGN_OUT_PATH } from '../../constants/route-paths';

import useHomeStyles from './styles';

const Home = () => {
  const homeStyles = useHomeStyles();

  return (
    <Container sx={homeStyles.container}>
      <CssBaseline />
      <Box component='img' src={headerBackgroundUrl} sx={homeStyles.headerBackground} />
      <Typography variant='h1' sx={{ mb: 3 }}>
        Home
      </Typography>
      <Button component={Link} to={SIGN_IN_PATH}>
        Sign in
      </Button>
      <Button component={Link} to={SIGN_OUT_PATH}>
        Sign out
      </Button>
    </Container>
  );
};

export default Home;
