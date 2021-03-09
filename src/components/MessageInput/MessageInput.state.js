import { useRef } from 'react';
import {
  uploadFileType,
  generateUniqueUid,
  metaData,
} from '../../helpers/helpers';
import { storage } from '../../firebase/firebase';
// TODO - Emoji
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

  // const [emojiToggle, setEmojiToggle] = useState(true);
  const submitHandler = () => {
    if (message?.current?.value) {
      addMessageStart(groupId, currentUserId, uid, message.current.value);
      message.current.value = '';
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileType = file?.name.split('.')[1];
    const reader = new FileReader();
    if (file && uploadFileType.includes(fileType)) {
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        setModal(true, reader.result);
      });
    } else {
      // eslint-disable-next-line
      alert('Please select jpeg/png file');
    }
  };

  const handleCroppedImage = () => {
    if (editor) {
      console.log(editor.current);
      editor.current.getImageScaledToCanvas().toBlob((blob) => {
        console.log(blob);
        const imageURL = URL.createObjectURL(blob);
        setImage(imageURL, blob);
      });
    }
  };

  const sendImageFile = () => {
    const id = generateUniqueUid();
    const storageRef = storage
      .ref()
      .child(`public/${id}`)
      .put(imageFile, metaData);
    storageRef.on(
      'state_changed',
      () => {
        setLoading();
      },
      () => {
        // eslint-disable-next-line
        alert('Image upload Failed.Please try again');
        setLoading();
        unMountModal();
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
          addMessageStart(groupId, currentUserId, uid, downloadURL);
          setLoading();
        });
      }
    );
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
