import React from 'react';
import ChatContainer from '../ChatContainer/ChatContainer';
import Header from '../shared/Header/Header';
import ChatListContainer from './ChatList.style';

const ChatList = () => {
  return (
    <ChatListContainer>
      <Header icon1='fas fa-user' position='left' />
      <ChatContainer />
    </ChatListContainer>
  );
};

export default ChatList;
