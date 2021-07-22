import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ nameButton, action }) => (
  <button
    type="button"
    onClick={action}
  >
    {nameButton}
  </button>
);

Button.propTypes = {
  nameButton: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
