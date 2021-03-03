import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createChannelStart } from '../../redux-sagas/channels/channels.action';
import { ChannelPropTypes } from '../../helpers/PropTypeValues';
import UseMessageState from './Messages.state';
import Header from '../../components/shared/Header/Header';
import MessageContainer from './Messages.style';
import MessageInput from '../../components/MessageInput/MessageInput';
import Message from '../../components/Message/Message';

const Messages = ({
  channel,
  currentUserId,
  createChannelStart: createChannel,
}) => {
  console.log('Message', channel, currentUserId);
  UseMessageState(channel, currentUserId, createChannel);
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
      <Message />
      <MessageInput />
    </MessageContainer>
  );
};

Messages.propTypes = {
  channel: ChannelPropTypes,
  currentUserId: PropTypes.string.isRequired,
  createChannelStart: PropTypes.func.isRequired,
};

Messages.defaultProps = {
  channel: null,
};

const mapDispatchToProps = (dispatch) => ({
  createChannelStart: (currentUserId, receiverId) =>
    // eslint-disable-next-line
    dispatch(createChannelStart(currentUserId, receiverId)),
});
export default connect(null, mapDispatchToProps)(Messages);
