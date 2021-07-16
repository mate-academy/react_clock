import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, callback }) => (
  <button
    type="button"
    onClick={callback}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
