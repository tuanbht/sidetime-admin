import React, { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { isLoadingApiSelector } from '../../selectors/loading-api-selector';

import { LOADING_BAR_COLOR } from './constants';

const LoadingAnimation = ({ autoRun = false }) => {
  const isLoadingApi = useSelector(isLoadingApiSelector);

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

LoadingAnimation.propTypes = {
  autoRun: PropTypes.bool,
};

LoadingAnimation.defaultPropTypes = {
  autoRun: false,
};

export default LoadingAnimation;
