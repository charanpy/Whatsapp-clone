import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { generateUniqueUid as id } from '../../helpers/helpers';
import { ChannelPropTypes } from '../../helpers/PropTypeValues';
import { selectMessage } from '../../redux-sagas/message/message.selector';
import UseMsgState from './Message.state';
import { ChatContainer } from './Message.style';
import MessageList from './MessageList';

const Message = ({ channel, currentUserId, messages }) => {
  const messagesArray = messages ? Object.values(messages) : [];
  const [messagesEndRef] = UseMsgState(channel, currentUserId, messagesArray);
  return (
    <ChatContainer>
      {messages &&
        messagesArray.map((val) => (
          <div key={val.key + id()}>
            <MessageList
              message={val.message}
              position={val.createdBy === currentUserId}
              timestamp={val.createdAt}
              seen={val.createdBy === currentUserId ? val.seen : null}
            />
            <div ref={messagesEndRef} />
          </div>
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
