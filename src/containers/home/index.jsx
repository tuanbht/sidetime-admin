import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import HeaderBackground from '../../assets/images/dashboard-header-bg.svg?react';
import { SIGN_IN_PATH, SIGN_OUT_PATH } from '../../constants/route-paths';

export default function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CssBaseline />
      <SvgIcon component={HeaderBackground} sx={{ width: '100vw', height: 1 }} viewBox='0 0 1663 27' />
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
}
