import { takeLatest, all, call, put } from 'redux-saga/effects';
import ChannelActionTypes from './channels.type';
import {
  displayChatListSuccess,
  displayChatListFailure,
  displayAddedChatSuccess,
  displayAddedChatFailure,
  createChannelSuccess,
  createChannelFailure,
  setCurrentChannelSuccess,
  setCurrentChannelNullSuccess,
} from './channels.action';
import { getChannelsList, addedChannelsList } from '../../firebase/firebase';
import { createChannel } from '../../firebase/channels';

export function* getChannel({ payload }) {
  try {
    const channelLists = yield call(getChannelsList, payload);
    yield put(displayChatListSuccess(channelLists));
  } catch (e) {
    console.log(e);
    yield put(displayChatListFailure());
  }
}

export function* OnDisplayChannelLists() {
  yield takeLatest(ChannelActionTypes.DISPLAY_USER_LIST_START, getChannel);
}

export function* getAddedChannel({ payload }) {
  try {
    const channelLists = yield call(addedChannelsList, payload);
    yield put(displayAddedChatSuccess(channelLists));
  } catch (e) {
    console.log(e);
    yield put(displayAddedChatFailure());
  }
}

export function* onDisplayAddedChannel() {
  yield takeLatest(
    ChannelActionTypes.DISPLAY_ADDED_CHANNEL_START,
    getAddedChannel
  );
}

export function* OnCreateChannel({ payload }) {
  try {
    const { currentUserId, receiverId } = payload;
    const groupId = yield call(createChannel, currentUserId, receiverId);
    yield put(createChannelSuccess(groupId));
  } catch (e) {
    yield put(createChannelFailure());
  }
}

export function* onCreateChannelStart() {
  yield takeLatest(ChannelActionTypes.CREATE_CHANNEL_START, OnCreateChannel);
}

export function* setCurrentChannel({ payload }) {
  yield put(setCurrentChannelSuccess(payload));
}

export function* OnSetCurrentChannelStart() {
  yield takeLatest(
    ChannelActionTypes.SET_CURRENT_CHANNEL_START,
    setCurrentChannel
  );
}

export function* setCurrentChannelNull() {
  yield put(setCurrentChannelNullSuccess());
}

export function* OnSetCurrentChannelNullStart() {
  yield takeLatest(
    ChannelActionTypes.SET_CURRENT_CHANNEL_NULL_START,
    setCurrentChannelNull
  );
}

export function* channelSagas() {
  yield all([
    call(OnDisplayChannelLists),
    call(onDisplayAddedChannel),
    call(OnSetCurrentChannelStart),
    call(OnSetCurrentChannelNullStart),
    call(onCreateChannelStart),
  ]);
}
