import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ handleClick }) => (

  <button type="button" onClick={handleClick}>
    Toggle clock
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
