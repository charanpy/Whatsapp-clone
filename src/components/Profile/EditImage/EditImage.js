import React from 'react';
import ImageText from './EditImage.style';
import UseEditorState from '../../shared/ImageEditor/Image.state';
import ImageEditor from '../../shared/ImageEditor/ImageEditor';
import UseEditImage from './EditImage.state';

const EditImage = () => {
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
  const [handleFileChange, handleCroppedImage, sendImageFile] = UseEditImage(
    OnMountModal,
    editor,
    setImage,
    setLoading,
    blob,
    OnUnMountModal
  );
  return (
    <>
      <ImageText htmlFor='send'>Change Profile Image</ImageText>
      <input
        id='send'
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />
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
    </>
  );
};

export default EditImage;
