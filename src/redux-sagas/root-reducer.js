import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import themeReducer from './theme/theme.reducer';
import channelReducer from './channels/channels.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  channels: channelReducer,
});

export default rootReducer;
