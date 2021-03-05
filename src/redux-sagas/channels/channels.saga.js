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
    yield console.log('payload', payload);
    const channelLists = yield call(getChannelsList, payload);
    yield console.log(11, channelLists);
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
    yield console.log('payload', payload);
    const channelLists = yield call(addedChannelsList, payload);
    yield console.log(11, channelLists);
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
    yield console.log(payload);
    const { currentUserId, receiverId } = payload;
    const groupId = yield call(createChannel, currentUserId, receiverId);
    yield put(createChannelSuccess(groupId));
  } catch (e) {
    console.log(e, 'oo');
    yield put(createChannelFailure());
  }
}

export function* onCreateChannelStart() {
  yield takeLatest(ChannelActionTypes.CREATE_CHANNEL_START, OnCreateChannel);
}

export function* setCurrentChannel({ payload }) {
  console.log(payload, 'chann');
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
