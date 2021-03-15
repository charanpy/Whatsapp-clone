import MessageActionTypes from './message.type';
import {
  getAllMessages,
  modifySeenStatus,
  // deleteNotification,
  // addNotification,
} from './helper';

const initialState = {
  loading: false,
  messages: [],
  notificationLoading: false,
  notifications: {},
};

const ChannelReducer = (state = initialState, action) => {
  switch (action.type) {
    case MessageActionTypes.GET_MESSAGES_START:
      return {
        ...state,
        loading: true,
      };
    case MessageActionTypes.GET_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case MessageActionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload ? getAllMessages(action.payload) : null,
      };
    case MessageActionTypes.GET_REALTIME_MSG_SUCCESS:
      return {
        ...state,
        messages: state.messages
          ? { ...state.messages, ...action.payload }
          : { ...action.payload },
      };
    case MessageActionTypes.SET_MSG_SEEN_SUCCESS:
      return {
        ...state,
        messages: modifySeenStatus(action.payload, state.messages),
      };
    case MessageActionTypes.GET_NOTIFICATION_START:
      return {
        ...state,
        notificationLoading: true,
      };
    /* eslint-disable */
    case MessageActionTypes.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notificationLoading: false,
        notifications: state.notifications
          ? {
              ...state.notifications,
              [action.payload.groupId]: action.payload.messages,
            }
          : {
              [action.payload.groupId]: action.payload.messages,
            },
      };
    case MessageActionTypes.GET_NOTIFICATION_FAILURE:
      return {
        ...state,
        notificationLoading: false,
      };
    case MessageActionTypes.ADD_REALTIME_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload.groupId]: [
            ...state.notifications[action.payload.groupId],
            action.payload.message,
          ],
        },
      };
    case MessageActionTypes.DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload]: [],
        },
      };

    case MessageActionTypes.CLEAR_UP_MESSAGE:
      return initialState;
    default:
      return state;
  }
};

export default ChannelReducer;
