import { connect } from "react-redux";
import { checkUserSession } from "./redux-sagas/user/user.action";
import { ThemeProvider } from "styled-components";
import AppRoute from "./Route/Route";
import { lightTheme } from "./helpers/theme";
import UseAppState from "./App.state";
import "./styles.css";
import PropTypes from "prop-types";

const App = ({ checkUserSession }) => {
  UseAppState(checkUserSession);
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRoute />
    </ThemeProvider>
  );
};

App.propTypes = {
  checkUserSession: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (user) => dispatch(checkUserSession(user))
});

export default connect(null, mapDispatchToProps)(App);
