import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';

const ContainerLayout = ({ container: Container }) => {
  console.log('ContainerLayout');

  return (
    <div>
      <Header />
      <Container />
    </div>
  );
};

ContainerLayout.propTypes = {
  container: PropTypes.elementType,
};

export default ContainerLayout;
