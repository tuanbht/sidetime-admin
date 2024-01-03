import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROOT_PATH } from '../../constants/route-paths';

import useNotFoundStyles from './styles';

export default function NotFoundPage() {
  const styles = useNotFoundStyles();

  return (
    <Container sx={styles.container}>
      <CssBaseline />
      <Typography variant='h1'>404</Typography>
      <Typography variant='subtitle1'>Oops! Page not found.</Typography>
      <Button component={Link} to={ROOT_PATH} variant='contained' color='primary'>
        Go Home
      </Button>
    </Container>
  );
}
