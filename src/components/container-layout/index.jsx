import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../header';
import SidebarMenu from '../sidebar-menu';

import useContainerLayoutStyles from './styles';

const ContainerLayout = ({ container: Container }) => {
  const styles = useContainerLayoutStyles();

  return (
    <SidebarMenu>
      <Box component='main' sx={styles.mainContainer}>
        <Header />
        <Container />
      </Box>
    </SidebarMenu>
  );
};

ContainerLayout.propTypes = {
  container: PropTypes.elementType,
};

export default ContainerLayout;
