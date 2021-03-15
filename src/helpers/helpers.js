import { v4 as uuidv4 } from 'uuid';

export const uploadFileType = ['jpeg', 'jpg', 'png'];

export const metaData = {
  contentType: 'image/png',
};
export const generateUniqueUid = () => uuidv4();

export const fileChange = (e, setModal) => {
  const file = e.target.files[0];
  const fileType = file?.name.split('.')[1];
  const reader = new FileReader();
  if (file && uploadFileType.includes(fileType)) {
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      setModal(true, reader.result);
    });
    return true;
  }
  return false;
};

export const setCroppedImage = (editor, setImage) => {
  editor.current.getImageScaledToCanvas().toBlob((blob) => {
    const imageURL = URL.createObjectURL(blob);
    setImage(imageURL, blob);
  });
};
