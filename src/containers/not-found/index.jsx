import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';

import { ROOT_PATH } from '../../constants/route-paths';

export default function NotFoundPage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Typography variant='h1' sx={{ mb: 3 }}>
        404
      </Typography>
      <Typography variant='subtitle1'>Oops! Page not found.</Typography>
      <Button component={Link} to={ROOT_PATH} variant='contained' color='primary'>
        Go Home
      </Button>
    </Container>
  );
}
