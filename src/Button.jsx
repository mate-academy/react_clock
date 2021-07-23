import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
