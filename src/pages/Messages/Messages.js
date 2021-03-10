import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createChannelStart } from '../../redux-sagas/channels/channels.action';
import { getMessagesStart, getRealtimeMessagesStart, setSeenStart, deleteNotificationStart } from '../../redux-sagas/message/message.action';
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
  deleteNotificationStart: deleteNotification
}) => {
  console.log('Message', channel, currentUserId);
  UseMessageState(
    channel, currentUserId, createChannel, getMessages, getRealtimeMsg, setSeen, deleteNotification
  );
  return (
    <MessageContainer>
      <Header
        icon1='fas fa-search'
        icon2='fas fa-ellipsis-v'
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
  deleteNotificationStart: (groupId) => dispatch(deleteNotificationStart(groupId))
});
export default connect(null, mapDispatchToProps)(Messages);
