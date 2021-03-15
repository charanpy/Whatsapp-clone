import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Button from '../Button/Button';

const ImageView = ({ src, action }) => {
  return (
    <>
      <Image width={25} height={25} src={src} />
      <Button danger content='CLOSE' onClick={action} />
    </>
  );
};

ImageView.propTypes = {
  src: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default React.memo(ImageView);
