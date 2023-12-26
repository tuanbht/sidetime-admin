import React from 'react';
import { ToastContainer } from 'react-toastify';

import LoadingAnimation from '../loading-animation';

const BackJobsWrapper = () => (
  <div>
    <LoadingAnimation />
    <ToastContainer position='top-center' autoClose={5000} closeOnClick draggable pauseOnHover theme='colored' />
  </div>
);

export default BackJobsWrapper;
