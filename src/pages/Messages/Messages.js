import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createChannelStart,
  setCurrentChannelNullStart,
} from '../../redux-sagas/channels/channels.action';
import {
  getMessagesStart,
  getRealtimeMessagesStart,
  setSeenStart,
  deleteNotificationStart,
} from '../../redux-sagas/message/message.action';
import { ChannelPropTypes } from '../../helpers/PropTypeValues';
import UseMessageState from './Messages.state';
import Header from '../../components/shared/Header/Header';
import MessageContainer from './Messages.style';
import MessageInput from '../../components/MessageInput/MessageInput';
import Message from '../../components/Message/Message.container';

const Messages = ({
  channel,
  currentUserId,
  createChannelStart: createChannel,
  getMessagesStart: getMessages,
  getRealtimeMessagesStart: getRealtimeMsg,
  setSeenStart: setSeen,
  deleteNotificationStart: deleteNotification,
  setCurrentChannelNullStart: setChannelNull,
}) => {
  UseMessageState(
    channel,
    currentUserId,
    createChannel,
    getMessages,
    getRealtimeMsg,
    setSeen,
    deleteNotification
  );
  return (
    <MessageContainer channel={!!channel}>
      <Header
        icon2='fas fa-home'
        onClick={setChannelNull}
        text
        label={channel?.displayName}
        chatProfile={channel?.photoURL}
        position='right'
      />
      <Message channel={channel} currentUserId={currentUserId} />
      <MessageInput channel={channel} currentUserId={currentUserId} />
    </MessageContainer>
  );
};

Messages.propTypes = {
  channel: ChannelPropTypes,
  currentUserId: PropTypes.string.isRequired,
  createChannelStart: PropTypes.func.isRequired,
  getMessagesStart: PropTypes.func.isRequired,
  getRealtimeMessagesStart: PropTypes.func.isRequired,
  setSeenStart: PropTypes.func.isRequired,
  deleteNotificationStart: PropTypes.func.isRequired,
  setCurrentChannelNullStart: PropTypes.func.isRequired,
};

Messages.defaultProps = {
  channel: null,
};

const mapDispatchToProps = (dispatch) => ({
  createChannelStart: (currentUserId, receiverId) =>
    // eslint-disable-next-line
    dispatch(createChannelStart(currentUserId, receiverId)),
  getMessagesStart: (id) => dispatch(getMessagesStart(id)),
  getRealtimeMessagesStart: (chat) => dispatch(getRealtimeMessagesStart(chat)),
  setSeenStart: (id) => dispatch(setSeenStart(id)),
  deleteNotificationStart: (groupId) =>
    // eslint-disable-next-line
    dispatch(deleteNotificationStart(groupId)),
  setCurrentChannelNullStart: () => dispatch(setCurrentChannelNullStart()),
});
export default connect(null, mapDispatchToProps)(Messages);
