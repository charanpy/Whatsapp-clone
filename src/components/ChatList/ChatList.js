import React from 'react';
import ChatContainer from '../ChatContainer/ChatContainer';
import Header from '../shared/Header/Header';
import ChatListContainer from './ChatList.style';

const ChatList = () => {
  console.log('chatList');
  return (
    <ChatListContainer>
      <Header
        icon1='fas fa-circle-notch'
        icon2='fas fa-ellipsis-v'
        position='left'
      />
      <ChatContainer />
    </ChatListContainer>
  );
};

export default ChatList;
