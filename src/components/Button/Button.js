import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ buttonName, onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
