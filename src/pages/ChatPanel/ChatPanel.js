import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserId } from '../../redux-sagas/user/user.selector';
import { selectCurrentChannel } from '../../redux-sagas/channels/channels.selector';
import TestPanel from '../../components/TestPanel/TestPanel';
import Messages from '../Messages/Messages.container';
import { ChannelPropTypes } from '../../helpers/PropTypeValues';

const ChatPanel = ({ currentUserId, channel }) => {
  return channel ? (
    <Messages channel={channel} currentUserId={currentUserId} />
  ) : (
    <TestPanel />
  );
};

ChatPanel.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  channel: ChannelPropTypes,
};

ChatPanel.defaultProps = {
  channel: null,
};

const mapStateToProps = createStructuredSelector({
  currentUserId: selectUserId,
  channel: selectCurrentChannel,
});

export default connect(mapStateToProps)(ChatPanel);
