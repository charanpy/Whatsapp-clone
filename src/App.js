import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { displayAddedChatStart } from './redux-sagas/channels/channels.action';
import { checkUserSession } from './redux-sagas/user/user.action';
import { setThemeLightStart } from './redux-sagas/theme/theme.action';
import { selectBackground } from './redux-sagas/theme/theme.selector';
import AppRoute from './Route/Route';
import UseAppState from './App.state';
import './styles.css';
import Spinner from './components/Spinner/SpinnerComponent';

const App = ({
  checkUserSession: userSession,
  setThemeLightStart: setLightTheme,
  AppTheme: theme,
  history = {},
  displayAddedChatStart: displayChatList,
}) => {
  const [AppTheme, AppLoading] = UseAppState(
    userSession,
    setLightTheme,
    theme,
    history,
    displayChatList
  );
  return AppLoading ? (
    <Spinner />
  ) : (
    <ThemeProvider theme={AppTheme}>
      <AppRoute />
    </ThemeProvider>
  );
};

App.propTypes = {
  checkUserSession: PropTypes.func.isRequired,
  setThemeLightStart: PropTypes.func.isRequired,
  AppTheme: PropTypes.string.isRequired,
  // eslint-disable-next-line
  history: PropTypes.object,
  displayAddedChatStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: (user) => dispatch(checkUserSession(user)),
  setThemeLightStart: () => dispatch(setThemeLightStart()),
  displayAddedChatStart: (userId) => dispatch(displayAddedChatStart(userId)),
});

const mapStateToProps = createStructuredSelector({
  AppTheme: selectBackground,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
