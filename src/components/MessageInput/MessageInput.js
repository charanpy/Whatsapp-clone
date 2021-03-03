import React from 'react';
import { Footer, SendMessage } from './MessageInput.style';
import Icon from '../shared/Icon/Icon';
import Input from '../shared/Input/Input';
import UseMessageInputState from './MessageInput.state';

const MessageInput = () => {
  const [message, submitHandler] = UseMessageInputState();
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

export default MessageInput;
