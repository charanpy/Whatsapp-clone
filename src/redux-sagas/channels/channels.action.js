import ChannelActionTypes from './channels.type';

export const displayChatListStart = (currentUserId) => ({
  type: ChannelActionTypes.DISPLAY_USER_LIST_START,
  payload: currentUserId,
});

export const displayChatListSuccess = (channels) => ({
  type: ChannelActionTypes.DISPLAY_USER_LIST_SUCCESS,
  payload: channels,
});

export const displayChatListFailure = () => ({
  type: ChannelActionTypes.DISPLAY_USER_LIST_FAILURE,
});

export const displayAddedChatStart = (currentUserId) => ({
  type: ChannelActionTypes.DISPLAY_ADDED_CHANNEL_START,
  payload: currentUserId,
});

export const displayAddedChatSuccess = (channels) => ({
  type: ChannelActionTypes.DISPLAY_ADDED_CHANNEL_SUCCESS,
  payload: channels,
});

export const displayAddedChatFailure = () => ({
  type: ChannelActionTypes.DISPLAY_ADDED_CHANNEL_FAILURE,
});

export const createChannelStart = (currentUserId, receiverId) => ({
  type: ChannelActionTypes.CREATE_CHANNEL_START,
  payload: { currentUserId, receiverId },
});

export const createChannelSuccess = (channel) => ({
  type: ChannelActionTypes.CREATE_CHANNEL_SUCCESS,
  payload: channel,
});

export const createChannelFailure = () => ({
  type: ChannelActionTypes.CREATE_CHANNEL_FAILURE,
});

export const setCurrentChannelStart = (channel) => ({
  type: ChannelActionTypes.SET_CURRENT_CHANNEL_START,
  payload: channel,
});

export const setCurrentChannelSuccess = (channel) => ({
  type: ChannelActionTypes.SET_CURRENT_CHANNEL_SUCCESS,
  payload: channel,
});

export const setCurrentChannelNullStart = () => ({
  type: ChannelActionTypes.SET_CURRENT_CHANNEL_NULL_START,
});

export const setCurrentChannelNullSuccess = () => ({
  type: ChannelActionTypes.SET_CURRENT_CHANNEL_NULL_SUCCESS,
});

export const getMessagesStart = (groupId) => ({
  type: ChannelActionTypes.GET_MESSAGES_START,
  payload: groupId,
});
