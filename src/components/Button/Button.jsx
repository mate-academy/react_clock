import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, text, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={className}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
