import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.scss';

const ContainerLayout = ({ container: Container }) => {
  console.log('ContainerLayout');

  return (
    <div className={classNames(styles.layout)}>
      <Container />
    </div>
  );
};

ContainerLayout.propTypes = {
  container: PropTypes.elementType,
};

export default ContainerLayout;
