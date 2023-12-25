import React, { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import PropTypes from 'prop-types';

import { LOADING_BAR_COLOR } from './constants';

const LoadingApiAnimation = ({ autoRun = false }) => {
  const isLoadingApi = false; //integrate with axios call apis

  const loadingBarRef = useRef(null);

  useEffect(() => {
    if (isLoadingApi) {
      loadingBarRef.current.continuousStart(0, 100);
    } else {
      loadingBarRef.current.complete();
    }
  }, [isLoadingApi]);

  useEffect(() => {
    autoRun && loadingBarRef.current.continuousStart(0, 100);
  }, [autoRun]);

  return <LoadingBar color={LOADING_BAR_COLOR} ref={loadingBarRef} />;
};

LoadingApiAnimation.propTypes = {
  autoRun: PropTypes.bool,
};

LoadingApiAnimation.defaultPropTypes = {
  autoRun: false,
};

export default LoadingApiAnimation;
