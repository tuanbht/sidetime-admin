import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
