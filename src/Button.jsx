import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ callback, name }) => (
  <button
    type="button"
    onClick={callback}
  >
    {name}
  </button>
);

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
