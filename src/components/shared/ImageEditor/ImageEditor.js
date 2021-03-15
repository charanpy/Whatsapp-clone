import React from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
import {
  Editor,
  CloseButton,
  Close,
  ButtonContainer,
} from './ImageEditor.style';
import Button from '../Button/Button';
import Spinner from '../../Spinner/SpinnerComponent';
import Modal from '../Modal/Modal';

const ImageEditor = ({
  visible,
  closeModal,
  image,
  content,
  editorRef,
  handleCrop,
  loading,
  croppedImage,
  sendImage,
}) => {
  return (
    <Modal visible={visible}>
      <Editor>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {!croppedImage ? (
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={200}
                height={200}
                border={50}
                scale={1.5}
              />
            ) : (
              <img
                src={croppedImage}
                width='200'
                height='200'
                alt='croppedImage'
              />
            )}
            <ButtonContainer>
              <Button danger content='CLOSE' onClick={closeModal} />

              {croppedImage ? (
                <Button content={content} onClick={sendImage} />
              ) : (
                <Button content='CROP' onClick={handleCrop} />
              )}
            </ButtonContainer>
            <CloseButton onClick={closeModal}>
              <Close>&#10006;</Close>
            </CloseButton>
          </>
        )}
      </Editor>
    </Modal>
  );
};
ImageEditor.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
  handleCrop: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  croppedImage: PropTypes.string,
  sendImage: PropTypes.func.isRequired,
  editorRef: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.elementType,
    }),
  }).isRequired,
};

ImageEditor.defaultProps = {
  image: null,
  croppedImage: null,
};

export default ImageEditor;
