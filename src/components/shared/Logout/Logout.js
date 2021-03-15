import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOutStart } from '../../../redux-sagas/user/user.action';
import { unsubscribeNotification } from '../../../redux-sagas/message/message.action';
import { LogoutContainer, Logout as LogoutButton } from './Logout.styles';

const Logout = ({
  signOutStart: logout,
  unsubscribeNotification: unsubscribe,
}) => {
  return (
    <>
      <LogoutContainer>
        <LogoutButton
          danger
          content='LOGOUT'
          onClick={logout}
          style={{ margin: 0 }}
        />
      </LogoutContainer>
    </>
  );
};

Logout.propTypes = {
  signOutStart: PropTypes.func.isRequired,
  unsubscribeNotification: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  unsubscribeNotification: () => dispatch(unsubscribeNotification()),
});

export default connect(null, mapDispatchToProps)(Logout);
