import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ action, text }) => (
  <button
    type="button"
    onClick={action}
  >
    {text}
  </button>
);

Button.propTypes = {
  action: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
};
