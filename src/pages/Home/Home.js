/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectUserId } from '../../redux-sagas/user/user.selector';
import { displayChatListStart } from '../../redux-sagas/channels/channels.action';
import HomeContainer from './Home.style';
import ChatList from '../../components/ChatList/ChatList';
import TestPanel from '../../components/TestPanel/TestPanel';
import UseHomeState from './Home.state';

const Home = ({ userId, displayChatListStart: displayChat }) => {
  UseHomeState(userId, displayChat);
  console.log('Home render');
  return (
    <HomeContainer>
      <ChatList />
      <TestPanel />
    </HomeContainer>
  );
};

Home.propTypes = {
  userId: PropTypes.string.isRequired,
  displayChatListStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  displayChatListStart: (chatList) => dispatch(displayChatListStart(chatList)),
});

const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Home));
