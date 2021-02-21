import UserTypes from "./user.type";

export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user) => ({
  type: UserTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_FAILURE
});

export const signInSuccess = (user) => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = () => ({
  type: UserTypes.SIGN_IN_FAILURE
});

export const signOutStart = () => ({
  type: UserTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS
});

export const checkUserSession = (user) => ({
  type: UserTypes.CHECK_USER_SESSION,
  payload: user
});
