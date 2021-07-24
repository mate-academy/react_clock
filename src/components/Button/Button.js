import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
