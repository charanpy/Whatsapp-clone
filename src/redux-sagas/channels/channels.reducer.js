import channelActionTypes from './channels.type';

const initialState = {
  chatList: [],
  loading: false,
  success: false,
  currentChannel: null,
  currentChannelLoading: false,
  messages: null,
};

const ChannelReducer = (state = initialState, action) => {
  switch (action.type) {
    case channelActionTypes.DISPLAY_USER_LIST_START:
    case channelActionTypes.DISPLAY_ADDED_CHANNEL_START:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case channelActionTypes.DISPLAY_USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        chatList: [...state.chatList, ...action.payload],
      };
    case channelActionTypes.DISPLAY_ADDED_CHANNEL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        chatList: action.payload,
      };
    case channelActionTypes.DISPLAY_USER_LIST_FAILURE:
    case channelActionTypes.DISPLAY_ADDED_CHANNEL_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        chatList: [],
      };
    case channelActionTypes.SET_CURRENT_CHANNEL_START:
    case channelActionTypes.CREATE_CHANNEL_START:
    case channelActionTypes.SET_CURRENT_CHANNEL_NULL_START:
      // case channelActionTypes.GET_MESSAGES_START:
      return {
        ...state,
        currentChannelLoading: true,
      };
    case channelActionTypes.SET_CURRENT_CHANNEL_SUCCESS:
      return {
        ...state,
        currentChannel: action.payload,
        currentChannelLoading: false,
      };
    case channelActionTypes.SET_CURRENT_CHANNEL_NULL_SUCCESS:
    case channelActionTypes.CREATE_CHANNEL_FAILURE:
      return {
        ...state,
        currentChannel: null,
        currentChannelLoading: false,
      };
    case channelActionTypes.CREATE_CHANNEL_SUCCESS:
      return {
        ...state,
        currentChannelLoading: false,
        currentChannel: {
          ...state.currentChannel,
          groupId: action.payload,
        },
      };
    default:
      return state;
  }
};

export default ChannelReducer;
