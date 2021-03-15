import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './Button.styles';

const Button = ({ content, danger, onClick, style }) => (
  <ButtonContainer danger={danger} onClick={onClick} style={style}>
    {content}
  </ButtonContainer>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape({
    margin: PropTypes.number,
  }),
};

Button.defaultProps = {
  danger: false,
  style: null,
};

export default Button;
