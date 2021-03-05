import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
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
  const [
    message,
    submitHandler,
    emojiToggle,
    handleEmojiToggle,
  ] = UseMessageInputState(channel, currentUserId, addMessage);
  console.log(message);
  return (
    <Footer>
      {emojiToggle && (
        <Picker
          set='apple'
          className='emojipicker'
          title='Pick emoji'
          emoji='point_up'
        />
      )}
      <Icon as='button' className='far fa-laugh' onClick={handleEmojiToggle} />
      {/* eslint-disable-next-line */}
      <label htmlFor='send_file'>
        <Icon className='fas fa-paperclip' />
      </label>
      <input id='send_file' type='file' />
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
