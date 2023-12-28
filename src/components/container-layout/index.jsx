import React from 'react';
import PropTypes from 'prop-types';

const ContainerLayout = ({ container: Container }) => {
  console.log('ContainerLayout');

  return <Container />;
};

ContainerLayout.propTypes = {
  container: PropTypes.elementType,
};

export default ContainerLayout;
