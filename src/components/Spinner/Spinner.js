import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.style";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log(isLoading);
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
