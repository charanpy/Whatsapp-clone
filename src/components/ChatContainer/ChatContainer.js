import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import {
  selectChatList,
  selectChannelLoading,
} from '../../redux-sagas/channels/channels.selector';
import UseChatState from './ChatContainer.state';
import DisplayUsers from './DisplayUsers';
import Input from '../shared/Input/Input';
import { InputWrapper } from '../shared/Input/Input.style';

const ChatContainer = ({ channels, isLoading }) => {
  const [searchField, onHandleChange, chatList, input] = UseChatState();
  return (
    <>
      <InputWrapper>
        <Input
          value={searchField}
          onChange={onHandleChange}
          name='search'
          icon
          placeholder='Search users'
          autoComplete='off'
          ref={input}
        />
      </InputWrapper>
      {!isLoading && (
        <DisplayUsers
          users={Object.entries(chatList) && Object.entries(chatList)}
          chatLists={channels}
        />
      )}
    </>
  );
};

ChatContainer.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      uid: PropTypes.string.isRequired,
      photoURL: PropTypes.string.isRequired,
      groupId: PropTypes.string,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  channels: selectChatList,
  isLoading: selectChannelLoading,
});

export default React.memo(connect(mapStateToProps)(ChatContainer));
