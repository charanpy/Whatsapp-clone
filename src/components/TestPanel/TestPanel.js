/* eslint-disable */
import { connect } from 'react-redux';
import { signOutStart } from '../../redux-sagas/user/user.action';
import {
  setThemeStart,
  setThemeLightStart,
} from '../../redux-sagas/theme/theme.action';
import TestPanelContainer from './TestPanel.style';

const TestPanel = ({ signOutStart, setThemeStart, setThemeLightStart }) => (
  <TestPanelContainer>
    <button onClick={signOutStart}>Sign out </button>
    <button onClick={setThemeStart}>Dark </button>
    <button onClick={setThemeLightStart}>Light</button>
  </TestPanelContainer>
);

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  setThemeStart: () => dispatch(setThemeStart()),
  setThemeLightStart: () => dispatch(setThemeLightStart()),
});

export default connect(null, mapDispatchToProps)(TestPanel);
