import { createSelector } from "reselect";

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
)

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)
