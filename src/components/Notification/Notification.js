import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
import { selectCurrentChannelGroupId } from '../../redux-sagas/channels/channels.selector';
import { selectNotification } from '../../redux-sagas/message/message.selector';
import {
  getNotificationStart,
  getRealtimeNotificationStart,
} from '../../redux-sagas/message/message.action';
import { auth } from '../../firebase/firebase';
import { Notification as Notify, Unseen } from '../Chat/Chat.style';
import UseNotificationState from './Notification.state';

const Notification = ({
  getNotificationStart: getNotification,
  groupId,
  currentGroup,
  getRealtimeNotificationStart: getRealtimeNotify,
  // eslint-disable-next-line
  msg,
}) => {
  UseNotificationState(
    getNotification,
    groupId,
    auth?.currentUser?.uid,
    currentGroup,
    getRealtimeNotify
  );
  console.log(msg, 7768);
  /* eslint-disable */

  return (
    <Notify>
      {msg && msg.length ? msg[msg.length - 1].message.substring(0, 5) : ''}
      {msg && msg.length > 0 && <Unseen> {msg.length}</Unseen>}
    </Notify>
  );
};

Notification.propTypes = {
  getNotificationStart: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  currentGroup: PropTypes.string,
  getRealtimeNotificationStart: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  currentGroup: null,
};
/* eslint-disable */
const mapStateToProps = (state, otherProps) => ({
  currentGroup: selectCurrentChannelGroupId(state),
  msg: selectNotification(otherProps.groupId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  getNotificationStart: (groupId, currentUserId) =>
    dispatch(getNotificationStart({ groupId, currentUserId })),
  getRealtimeNotificationStart: (groupId, message) =>
    dispatch(getRealtimeNotificationStart({ groupId, message })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
