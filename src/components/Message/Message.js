import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMessage } from '../../redux-sagas/message/message.selector';
import { ChannelPropTypes } from '../../helpers/PropTypeValues';
import UseMsgState from './Message.state';
import MessageList from './MessageList';
import { ChatContainer } from './Message.style';

/* eslint-disable */
const Message = ({ channel, currentUserId, messages }) => {
  UseMsgState(channel, currentUserId);
  return (
    <ChatContainer>
      {messages &&
        messages.map((val) => (
          <MessageList
            message={val.message}
            position={val.createdBy === currentUserId}
            timestamp={val.createdAt}
            key={val.message}
          />
        ))}
    </ChatContainer>
  );
};

Message.propTypes = {
  channel: ChannelPropTypes,
  currentUserId: PropTypes.string.isRequired,
};

Message.defaultProps = {
  channel: null,
};

const mapStateToProps = createStructuredSelector({
  messages: selectMessage,
});

export default connect(mapStateToProps)(Message);
