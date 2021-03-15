import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from './Image.style';

const Image = ({ height = 20, width = 20, src }) => {
  return (
    <>
      <ImageContainer height={height} width={width} src={src} />
    </>
  );
};

Image.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  height: 20,
  width: 20,
};

export default React.memo(Image);
