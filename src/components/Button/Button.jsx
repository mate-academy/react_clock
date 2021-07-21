import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ method, text, className }) => (
  <button
    type="button"
    onClick={method}
    className={className}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};
