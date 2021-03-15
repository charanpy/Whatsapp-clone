import { useRef } from 'react';
import { fileChange, setCroppedImage } from '../../helpers/helpers';
import { sendImageFb } from '../../firebase/channels';

const MessageInputState = (
  channel,
  currentUserId,
  addMessageStart,
  setModal,
  editor,
  setImage,
  setLoading,
  imageFile,
  unMountModal
) => {
  const message = useRef(null);
  const { groupId, uid } = channel;

  const submitHandler = () => {
    if (message?.current?.value) {
      addMessageStart(groupId, currentUserId, uid, message.current.value);
      message.current.value = '';
    }
  };

  const handleFileChange = (e) => {
    const file = fileChange(e, setModal);
    if (!file) {
      alert('Please select jpeg/.png file');
    }
  };

  const handleCroppedImage = () => {
    if (editor) {
      setCroppedImage(editor, setImage);
    }
  };

  const addImageMessage = (downloadURL) => {
    addMessageStart(groupId, currentUserId, uid, downloadURL, unMountModal);
    setLoading();
  };

  const sendImageFile = () => {
    sendImageFb(imageFile, setLoading, unMountModal, addImageMessage);
  };

  return [
    message,
    submitHandler,
    handleFileChange,
    handleCroppedImage,
    sendImageFile,
  ];
};

export default MessageInputState;
