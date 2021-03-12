import React from 'react';
import { SpinnerOverlay as SpinnerWrapper } from './Spinner.style';
import Spinner from './SpinnerComponent';

const SpinnerOverlay = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default SpinnerOverlay;
