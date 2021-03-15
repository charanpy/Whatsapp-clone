/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectUserId } from '../../redux-sagas/user/user.selector';
import Chat from '../Chat/Chat';
import UseDisplayState from './DisplayUsers.state';

const DisplayUsers = ({ users, uid, chatLists }) => {
  const [filteredUsers] = UseDisplayState(users, uid);

  return users.length > 0
    ? filteredUsers.map(([key, value]) => (
        <Chat
          displayName={value.displayName}
          uid={value.uid}
          photoURL={value.photoURL}
          key={key}
        />
      ))
    : chatLists.length &&
        chatLists.map(({ displayName, uid, photoURL, groupId }) => (
          <Chat
            displayName={displayName}
            uid={uid}
            photoURL={photoURL}
            key={uid}
            groupId={groupId}
          />
        ));
};

DisplayUsers.propTypes = {
  users: PropTypes.array,
  uid: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  uid: selectUserId,
});

export default React.memo(connect(mapStateToProps)(DisplayUsers));
