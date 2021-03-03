import { createSelector } from 'reselect';

const selectChannels = (state) => state.channels;

export const selectChannelLoading = createSelector(
  [selectChannels],
  (channel) => channel.loading
);

export const selectChatList = createSelector(
  [selectChannels],
  (channel) => channel.chatList
);

export const selectCurrentChannelLoading = createSelector(
  [selectChannels],
  (channel) => channel.currentChannelLoading
);

export const selectCurrentChannel = createSelector(
  [selectChannels],
  (channel) => channel.currentChannel
);

export const selectCurrentChannelId = createSelector(
  [selectChannels],
  (channel) => channel.currentChannel.uid
);
