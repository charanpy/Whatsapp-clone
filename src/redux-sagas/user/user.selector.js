import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectIsUserAuthenticated = createSelector(
  [selectUser],
  (user) => !!user.currentUser
);

export const selectIsLoading = createSelector(
  [selectUser],
  (user) => user.loading
);

export const selectProfilePhoto = createSelector(
  [selectUser],
  (user) => user.currentUser?.photoURL
);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUsername = createSelector(
  [selectUser],
  (user) => user.currentUser?.displayName
);

export const selectIsUserLoaded = createSelector(
  [selectUser],
  (user) => user.userLoading
);

export const selectUserId = createSelector(
  [selectUser],
  (user) => user.currentUser?.uid
);
