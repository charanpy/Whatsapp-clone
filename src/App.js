import { connect } from "react-redux";
import { checkUserSession } from "./redux-sagas/user/user.action";
import {
  setThemeStart,
  setThemeLightStart
} from "./redux-sagas/theme/theme.action";
import { selectBackground } from "./redux-sagas/theme/theme.selector";
import { ThemeProvider } from "styled-components";
import AppRoute from "./Route/Route";
import UseAppState from "./App.state";
import { createStructuredSelector } from "reselect";
import "./styles.css";
import PropTypes from "prop-types";

const App = ({
  checkUserSession,
  setThemeStart,
  setThemeLightStart,
  AppTheme: theme
}) => {
  const [AppTheme] = UseAppState(checkUserSession, setThemeLightStart, theme);
  return (
    <ThemeProvider theme={AppTheme}>
      <AppRoute />
    </ThemeProvider>
  );
};

App.propTypes = {
  checkUserSession: PropTypes.func.isRequired,
  setThemeStart: PropTypes.func.isRequired,
  setThemeLightStart: PropTypes.func.isRequired,
  AppTheme: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (user) => dispatch(checkUserSession(user)),
  setThemeStart: () => dispatch(setThemeStart()),
  setThemeLightStart: () => dispatch(setThemeLightStart())
});

const mapStateToProps = createStructuredSelector({
  AppTheme: selectBackground
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
