import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessageStart } from '../../redux-sagas/message/message.action';
import { ChannelPropTypes } from '../../helpers/PropTypeValues';
import { Footer, SendMessage } from './MessageInput.style';
import Icon from '../shared/Icon/Icon';
import Input from '../shared/Input/Input';
import UseMessageInputState from './MessageInput.state';

const MessageInput = ({
  channel,
  currentUserId,
  addMessageStart: addMessage,
}) => {
  const [message, submitHandler] = UseMessageInputState(
    channel,
    currentUserId,
    addMessage
  );
  console.log(message);
  return (
    <Footer>
      <Icon className='far fa-laugh' />
      <Icon className='fas fa-paperclip' />
      <Input
        name='message'
        placeholder='Type a message'
        ref={message}
        autoComplete='off'
      />
      <SendMessage onClick={submitHandler}>
        <Icon className='fas fa-paper-plane' />
      </SendMessage>
    </Footer>
  );
};

MessageInput.propTypes = {
  channel: ChannelPropTypes,
  currentUserId: PropTypes.string.isRequired,
  addMessageStart: PropTypes.func.isRequired,
};

MessageInput.defaultProps = {
  channel: null,
};

const mapDispatchToProps = (dispatch) => ({
  addMessageStart: (groupId, currentUserId, receiverId, message) =>
    // eslint-disable-next-line
    dispatch(addMessageStart({ groupId, currentUserId, receiverId, message })),
});

export default connect(null, mapDispatchToProps)(MessageInput);
