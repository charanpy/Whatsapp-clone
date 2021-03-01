import React from 'react';
import ChatListContainer from './ChatList.style';
import Header from '../Header/Header';
import ChatContainer from '../ChatContainer/ChatContainer';

const ChatList = () => {
  console.log('chatList');
  return (
    <ChatListContainer>
      <Header />
      <ChatContainer />
    </ChatListContainer>
  );
};

export default ChatList;
