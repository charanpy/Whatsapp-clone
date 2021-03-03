import React from 'react';
import {
  MessageContainer,
  Tail,
  Message as MessageWrap,
} from './Message.style';

const Message = () => {
  return (
    <MessageContainer>
      <MessageWrap>
        <Tail />
        <span>Hi</span>
      </MessageWrap>
    </MessageContainer>
  );
};

export default Message;
