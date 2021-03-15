import {
  takeLatest,
  all,
  call,
  put,
  takeEvery,
  take,
  cancel,
} from 'redux-saga/effects';
import MessageActionTypes from './message.type';
import {
  getMessagesSuccess,
  getMessagesFailure,
  addMessageSuccess,
  addMessageFailure,
  getRealtimeMessagesSuccess,
  getRealtimeMessagesFailure,
  setSeenSuccess,
  getNotificationSuccess,
  getNotificationFailure,
  getRealtimeNotificationSuccess,
  deleteNotificationSuccess,
} from './message.action';
import {
  addMessages as getMsgDb,
  getMessagesFromDb,
  getNotifications,
} from '../../firebase/channels';

export function* getMessage({ payload }) {
  try {
    const msg = yield call(getMessagesFromDb, payload);
    yield put(getMessagesSuccess(msg));
  } catch (e) {
    console.log(e);
    yield put(getMessagesFailure());
  }
}

export function* onGetMessagesStart() {
  yield takeLatest(MessageActionTypes.GET_MESSAGES_START, getMessage);
}

export function* addMessage({ payload }) {
  try {
    const { groupId, currentUserId, receiverId, message } = payload;
    const res = yield call(
      getMsgDb,
      groupId,
      currentUserId,
      receiverId,
      message
    );
    yield put(addMessageSuccess());
  } catch (e) {
    console.log(e);
    yield put(addMessageFailure());
  }
}

export function* OnaddMessageStart() {
  yield takeLatest(MessageActionTypes.ADD_MESSAGES_START, addMessage);
}

export function* getRealtimeMsg({ payload }) {
  try {
    yield put(getRealtimeMessagesSuccess(payload));
  } catch (e) {
    console.log(e);
    yield put(getRealtimeMessagesFailure());
  }
}

export function* OnGetRealTimeMsgStart() {
  yield takeLatest(MessageActionTypes.GET_REALTIME_MSG_START, getRealtimeMsg);
}

export function* setMsgSeen({ payload }) {
  yield put(setSeenSuccess(payload));
}

export function* OnSetMsgSeen() {
  yield takeLatest(MessageActionTypes.SET_MSG_SEEN_START, setMsgSeen);
}

export function* unsubscribe(task) {
  yield cancel(task);
}

export function* fetchNotification({ payload }) {
  try {
    const { groupId, currentUserId } = payload;
    const messages = yield call(getNotifications, groupId, currentUserId);
    yield put(getNotificationSuccess({ groupId, messages }));
  } catch (e) {
    console.log(e, e?.message);
    yield put(getNotificationFailure());
  }
}

export function* OnFetchNotificationStart() {
  const notification = yield takeEvery(
    MessageActionTypes.GET_NOTIFICATION_START,
    fetchNotification
  );
  yield take(MessageActionTypes.UNSUBSCRIBE_NOTIFICATION);
  yield call(unsubscribe, notification);
}

export function* addNotification({ payload }) {
  const { groupId, message } = payload;
  yield put(getRealtimeNotificationSuccess({ groupId, message }));
}

export function* OnAddNotificationStart() {
  yield takeLatest(
    MessageActionTypes.ADD_REALTIME_NOTIFICATION_START,
    addNotification
  );
}

export function* deleteNotification({ payload }) {
  yield put(deleteNotificationSuccess(payload));
}

export function* OnDeleteNotificationStart() {
  yield takeLatest(
    MessageActionTypes.DELETE_NOTIFICATION_START,
    deleteNotification
  );
}
export function* messageSagas() {
  yield all([
    call(onGetMessagesStart),
    call(OnaddMessageStart),
    call(OnGetRealTimeMsgStart),
    call(OnSetMsgSeen),
    call(OnFetchNotificationStart),
    call(OnAddNotificationStart),
    call(OnDeleteNotificationStart),
  ]);
}
