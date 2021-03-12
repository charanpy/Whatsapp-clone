import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './Button.styles';

const Button = ({ content, danger, onClick }) => (
  <ButtonContainer danger={danger} onClick={onClick}>
    {content}
  </ButtonContainer>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  danger: false,
};

export default Button;
