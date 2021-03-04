import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import themeReducer from './theme/theme.reducer';
import channelReducer from './channels/channels.reducer';
import messageReducer from './message/message.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  channels: channelReducer,
  messages: messageReducer,
});

export default rootReducer;
