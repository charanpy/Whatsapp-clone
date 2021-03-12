import React from 'react';
import ImageText from './EditImage.style';

const EditImage = () => {
  return (
    <>
      <ImageText htmlFor='send'>Change Profile Image</ImageText>
      <input id='send' type='file' accept='image/*' />
    </>
  );
};

export default EditImage;
