import { createSelector } from 'reselect';

const selectMessages = (state) => state.messages;

export const selectIsLoading = createSelector(
  [selectMessages],
  (message) => message.loading
);

export const selectMessage = createSelector(
  [selectMessages],
  (msg) => msg.messages
);

export const selectNotification = (groupId) => createSelector(
  [selectMessages],
  (msg) => (msg.notifications ? msg.notifications[groupId] : null)
);
