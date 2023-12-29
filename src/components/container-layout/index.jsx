import PropTypes from 'prop-types';
import React from 'react';

import Header from '../header';
import SidebarMenu from '../sidebar-menu';

const ContainerLayout = ({ container: Container }) => {
  console.log('ContainerLayout');

  return (
    <div>
      <SidebarMenu>
        <Header />
        <Container />
      </SidebarMenu>
    </div>
  );
};

ContainerLayout.propTypes = {
  container: PropTypes.elementType,
};

export default ContainerLayout;
