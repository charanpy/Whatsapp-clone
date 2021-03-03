/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from './Input.style';

const InputContainer = (props, ref) => {
  console.log(props);
  return (
    <>
      <Input {...props} ref={ref} />
      {props.icon && <Icon className='fas fa-search' />}
    </>
  );
};

// InputContainer.propTypes = {
//   onHandleChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
//   placeholder: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   icon: PropTypes.bool,
//   width: PropTypes.number,
//   handleKeyPress: PropTypes.func,
// };

// InputContainer.defaultProps = {
//   icon: false,
//   width: 100,
//   handleKeyPress: null,
// };

export default React.forwardRef(InputContainer);
