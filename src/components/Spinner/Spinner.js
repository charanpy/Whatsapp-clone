/*eslint-disable */
import React from 'react';
import SpinnerComponent from './SpinnerComponent';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log(isLoading, 100);
  return isLoading ? (
    <SpinnerComponent />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
