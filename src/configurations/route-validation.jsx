import React from 'react';
import PropTypes from 'prop-types';

import ContainerLayout from '../components/container-layout';
import LoadingApiAnimation from '../components/loading-api-animation';

const RouteValidation = ({ container, ...props }) => (
  <React.Suspense fallback={<LoadingApiAnimation autoRun />}>
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
