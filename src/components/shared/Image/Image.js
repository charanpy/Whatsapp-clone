/* eslint-disable */
import React from 'react';
import ImageContainer from './Image.style';

const Image =({ height=20, width=20, src }) => (
  <ImageContainer height={height} width={width} src={src} />
);

export default Image;
