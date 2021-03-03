import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrentChannelId } from '../../redux-sagas/channels/channels.selector';
import { Notification } from '../Chat/Chat.style';
import useActiveState from './ActiveUser.state';

const ActiveUser = ({ id }) => {
  const status = useActiveState(id);
  console.log(status, 'status');
  return (
    <Notification>
      {/* eslint-disable-next-line */}
      {status &&
        (status.state === 'online'
          ? status.state
          : formatDistanceToNow(status.last_changed))}
    </Notification>
  );
};

ActiveUser.propTypes = {
  id: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  id: selectCurrentChannelId,
});

export default connect(mapStateToProps)(ActiveUser);
