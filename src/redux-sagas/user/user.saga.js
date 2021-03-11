import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserTypes from './user.type';
import * as userAction from './user.action';
import {
  signInWithGoogle,
  signOut as logout,
  createUserDocument,
  getUser,
} from '../../firebase/firebase';

export function* googleSignIn() {
  try {
    const userDetails = yield call(signInWithGoogle);
    console.log(userDetails, 21);
    const res = yield call(createUserDocument, userDetails);
    console.log(res);
    // yield put(userAction.googleSignInSuccess())
  } catch (error) {
    console.log(error);
    // eslint-disable-next-line
    alert(error.message);
    yield put(userAction.googleSignInFailure());
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* signOut() {
  try {
    yield call(logout);
    yield put(userAction.signOutSuccess());
  } catch (error) {
    console.log(error);
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserTypes.SIGN_OUT_START, signOut);
}

export function* checkUserSession({ payload }) {
  try {
    const user = yield call(getUser, payload);
    yield put(userAction.signInSuccess(user || payload));
  } catch (error) {
    yield put(userAction.signInFailure());
  }
}

export function* onCheckUserSessionStart() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* changeProfile({ payload }) {
  const { name, value } = payload;
  yield put(userAction.changeProfileSuccess({ name, value }));
}

export function* onChangeProfileStart() {
  yield takeLatest(UserTypes.CHANGE_PROFILE_START, changeProfile);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onCheckUserSessionStart),
    call(onChangeProfileStart),
  ]);
}
