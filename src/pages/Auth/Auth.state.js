import { Redirect } from "react-router-dom";

const AuthState = (isAuthenticated) => {
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
};

export default AuthState;
