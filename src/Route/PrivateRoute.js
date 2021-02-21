import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsUserAuthenticated } from "../redux-sagas/user/user.selector";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? <Redirect to="/signin" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsUserAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
