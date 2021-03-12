import { useState, useRef } from 'react';

const ImageEditorState = () => {
  const [modal, setModal] = useState({
    visible: false,
    file: null,
    croppedImage: null,
    loading: false,
    blob: null,
  });
  const editor = useRef();
  const { visible, file, loading, croppedImage, blob } = modal;
  const onMountModal = (isVisible, photo) => {
    console.log(isVisible, 'aaa');
    setModal({
      ...modal,
      visible: isVisible,
      file: photo,
    });
  };
  console.log(modal);

  const OnUnMountModal = () => {
    setModal({
      ...modal,
      visible: false,
      file: null,
      croppedImage: null,
      loading: false,
    });
  };

  const setImage = (img, info) => {
    setModal({
      ...modal,
      croppedImage: img,
      blob: info,
    });
  };

  const setLoading = () => {
    setModal((IsLoading) => !IsLoading);
  };

  return [
    visible,
    file,
    onMountModal,
    OnUnMountModal,
    editor,
    setImage,
    loading,
    croppedImage,
    setLoading,
    blob,
  ];
};

export default ImageEditorState;
