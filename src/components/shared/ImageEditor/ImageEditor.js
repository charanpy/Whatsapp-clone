import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
import {
  ModalContainer,
  Editor,
  CloseButton,
  Close,
  ButtonContainer,
} from './ImageEditor.style';
import Button from '../Button/Button';
import Spinner from '../../Spinner/SpinnerComponent';
/* eslint-disable */

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
  console.log(visible, loading);
  return (
    <CSSTransition in={visible} timeout={500} classNames='fade' unmountOnExit>
      <ModalContainer>
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
                <Button content='CROP' onClick={handleCrop} />
                {croppedImage && (
                  <Button content={content} onClick={sendImage} />
                )}
              </ButtonContainer>
              <CloseButton onClick={closeModal}>
                <Close>&#10006;</Close>
              </CloseButton>
            </>
          )}
        </Editor>
      </ModalContainer>
    </CSSTransition>
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
};

ImageEditor.defaultProps = {
  image: null,
  croppedImage: null,
};

export default ImageEditor;
