import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.saga';
import { themeSagas } from './theme/theme.saga';
import { channelSagas } from './channels/channels.saga';
import { messageSagas } from './message/message.saga';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(themeSagas),
    call(channelSagas),
    call(messageSagas),
  ]);
}
