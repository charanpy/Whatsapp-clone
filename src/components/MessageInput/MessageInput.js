import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessageStart } from '../../redux-sagas/message/message.action';
import { ChannelPropTypes } from '../../helpers/PropTypeValues';
import { Footer, SendMessage } from './MessageInput.style';
import Icon from '../shared/Icon/Icon';
import Input from '../shared/Input/Input';
import UseMessageInputState from './MessageInput.state';
import UseEditorState from '../shared/ImageEditor/Image.state';
import ImageEditor from '../shared/ImageEditor/ImageEditor';

const MessageInput = ({
  channel,
  currentUserId,
  addMessageStart: addMessage,
}) => {
  const [
    visible,
    file,
    OnMountModal,
    OnUnMountModal,
    editor,
    setImage,
    loading,
    croppedImage,
    setLoading,
    blob,
  ] = UseEditorState();
  const [
    message,
    submitHandler,
    handleFileChange,
    handleCroppedImage,
    sendImageFile,
  ] = UseMessageInputState(
    channel,
    currentUserId,
    addMessage,
    OnMountModal,
    editor,
    setImage,
    setLoading,
    blob,
    OnUnMountModal
  );
  return (
    <Footer>
      <Icon as='button' className='far fa-laugh' />
      <label htmlFor='send_file'>
        <Icon className='fas fa-paperclip' />
      </label>
      <input id='send_file' type='file' onChange={handleFileChange} />
      <Input
        name='message'
        placeholder='Type a message'
        ref={message}
        autoComplete='off'
      />
      <SendMessage onClick={submitHandler}>
        <Icon className='fas fa-paper-plane' />
      </SendMessage>
      <ImageEditor
        visible={visible}
        closeModal={OnUnMountModal}
        image={file}
        content='SEND'
        editorRef={editor}
        handleCrop={handleCroppedImage}
        loading={loading}
        croppedImage={croppedImage}
        sendImage={sendImageFile}
      />
    </Footer>
  );
};

MessageInput.propTypes = {
  channel: ChannelPropTypes,
  currentUserId: PropTypes.string.isRequired,
  addMessageStart: PropTypes.func.isRequired,
};

MessageInput.defaultProps = {
  channel: null,
};

const mapDispatchToProps = (dispatch) => ({
  addMessageStart: (groupId, currentUserId, receiverId, message) =>
    dispatch(addMessageStart({ groupId, currentUserId, receiverId, message })),
});

export default React.memo(connect(null, mapDispatchToProps)(MessageInput));
