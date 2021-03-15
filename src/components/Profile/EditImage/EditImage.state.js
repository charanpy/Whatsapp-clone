import { fileChange, setCroppedImage } from '../../../helpers/helpers';
import { changeProfilePicture, sendImageFb } from '../../../firebase/channels';

const EditImageState = (
  setModal,
  editor,
  setImage,
  setLoading,
  imageFile,
  unMountModal
) => {
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

  const updateImage = (photoURL) => {
    changeProfilePicture(photoURL, unMountModal);
    setLoading();
  };
  const sendImageFile = () => {
    sendImageFb(imageFile, setLoading, unMountModal, updateImage);
  };
  return [handleFileChange, handleCroppedImage, sendImageFile];
};

export default EditImageState;
