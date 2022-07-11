import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
};
