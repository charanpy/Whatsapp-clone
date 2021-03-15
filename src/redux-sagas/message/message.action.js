import MessageActionTypes from './message.type';

export const getMessagesStart = (groupId) => ({
  type: MessageActionTypes.GET_MESSAGES_START,
  payload: groupId,
});

export const getMessagesSuccess = (messages = null) => ({
  type: MessageActionTypes.GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesFailure = () => ({
  type: MessageActionTypes.GET_MESSAGES_FAILURE,
});

export const addMessageStart = (message) => ({
  type: MessageActionTypes.ADD_MESSAGES_START,
  payload: message,
});

export const addMessageSuccess = (message) => ({
  type: MessageActionTypes.ADD_MESSAGES_SUCCESS,
  payload: message,
});

export const addMessageFailure = () => ({
  type: MessageActionTypes.ADD_MESSAGES_FAILURE,
});

export const getRealtimeMessagesStart = (groupId) => ({
  type: MessageActionTypes.GET_REALTIME_MSG_START,
  payload: groupId,
});

export const getRealtimeMessagesSuccess = (messages = null) => ({
  type: MessageActionTypes.GET_REALTIME_MSG_SUCCESS,
  payload: messages,
});

export const getRealtimeMessagesFailure = () => ({
  type: MessageActionTypes.GET_REALTIME_MSG_FAILURE,
});

export const setSeenStart = (id) => ({
  type: MessageActionTypes.SET_MSG_SEEN_START,
  payload: id,
});

export const setSeenSuccess = (id) => ({
  type: MessageActionTypes.SET_MSG_SEEN_SUCCESS,
  payload: id,
});

export const getNotificationStart = (groupId) => ({
  type: MessageActionTypes.GET_NOTIFICATION_START,
  payload: groupId,
});

export const getNotificationSuccess = (msg) => ({
  type: MessageActionTypes.GET_NOTIFICATION_SUCCESS,
  payload: msg,
});

export const getNotificationFailure = () => ({
  type: MessageActionTypes.GET_NOTIFICATION_FAILURE,
});

export const getRealtimeNotificationStart = (message) => ({
  type: MessageActionTypes.ADD_REALTIME_NOTIFICATION_START,
  payload: message,
});

export const getRealtimeNotificationSuccess = (message) => ({
  type: MessageActionTypes.ADD_REALTIME_NOTIFICATION_SUCCESS,
  payload: message,
});

export const deleteNotificationStart = (message) => ({
  type: MessageActionTypes.DELETE_NOTIFICATION_START,
  payload: message,
});

export const deleteNotificationSuccess = (message) => ({
  type: MessageActionTypes.DELETE_NOTIFICATION_SUCCESS,
  payload: message,
});

export const clearUpMessage = () => ({
  type: MessageActionTypes.CLEAR_UP_MESSAGE,
});

export const unsubscribeNotification = () => ({
  type: MessageActionTypes.UNSUBSCRIBE_NOTIFICATION,
});
