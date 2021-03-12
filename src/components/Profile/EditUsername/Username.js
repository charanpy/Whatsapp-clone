import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {
  selectUsername,
  selectUserId,
} from '../../../redux-sagas/user/user.selector';
import Button from '../../shared/Button/Button';
import UsernameState from './Username.state';
import { Input, LabelText } from './Username.style';

const Username = ({ username, currentUserId }) => {
  const [inputRef, updateUsername] = UsernameState(currentUserId, username);
  return (
    <>
      <LabelText>Name</LabelText>
      <Input
        placeholder='Username'
        autoComplete='off'
        name='username'
        defaultValue={username}
        ref={inputRef}
      />
      <Button onClick={updateUsername} content='UPDATE' />
    </>
  );
};

Username.propTypes = {
  username: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  username: selectUsername,
  currentUserId: selectUserId,
});

export default connect(mapStateToProps)(Username);
