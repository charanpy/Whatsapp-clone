/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from './Input.style';

const InputContainer = (props, ref) => {
  return (
    <>
      <Input {...props} ref={ref} />
      {props.icon && <Icon className='fas fa-search' />}
    </>
  );
};

export default React.forwardRef(InputContainer);
