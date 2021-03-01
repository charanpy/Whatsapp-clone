const AuthState = (isAuthenticated, history) => {
  console.log(isAuthenticated);
  if (isAuthenticated) history.push('/');
};

export default AuthState;
