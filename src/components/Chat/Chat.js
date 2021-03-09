import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentChannelStart } from '../../redux-sagas/channels/channels.action';
import {
  ChatContainer,
  ChatDetail,
  ChatName,
  ImageContainer,
} from './Chat.style';
import ProfileImage from '../shared/ProfileImage/ProfileImage';
import Notification from '../Notification/Notification';

const Chat = ({
  displayName,
  uid,
  photoURL,
  groupId,
  setCurrentChannelStart: setChannel,
}) => {
  const groupInfo = {
    groupId,
    displayName,
    uid,
    photoURL,
  };
  return (
    <>
      <ChatContainer onClick={() => setChannel(groupInfo)} tabindex='0'>
        <ImageContainer>
          <ProfileImage height={5} chatProfile={photoURL} />
        </ImageContainer>
        <ChatDetail>
          <ChatName>{displayName}</ChatName>
          <Notification groupId={groupId} />
        </ChatDetail>
      </ChatContainer>
    </>
  );
};

Chat.propTypes = {
  displayName: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  groupId: PropTypes.string,
  setCurrentChannelStart: PropTypes.func.isRequired,
};

Chat.defaultProps = {
  groupId: null,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentChannelStart: (channelInfo) =>
    // eslint-disable-next-line
    dispatch(setCurrentChannelStart(channelInfo)),
});

export default React.memo(connect(null, mapDispatchToProps)(Chat));
