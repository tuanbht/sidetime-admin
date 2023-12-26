import React from 'react';
import PropTypes from 'prop-types';

import ContainerLayout from '../components/container-layout';
import LoadingAnimation from '../components/loading-animation';

const RouteValidation = ({ container, ...props }) => (
  <React.Suspense fallback={<LoadingAnimation autoRun />}>
    <ContainerLayout container={container} {...props} />
  </React.Suspense>
);

RouteValidation.propTypes = {
  container: PropTypes.elementType.isRequired,
  privateRoute: PropTypes.bool,
  lockable: PropTypes.bool,
  hideDetectingAuthenticatedUser: PropTypes.bool,
  expertOnly: PropTypes.bool,
};

export default RouteValidation;
