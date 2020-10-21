import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ click, text }) => (
  <button type="button" onClick={click} className="btn btn-light">
    {text}
  </button>
);

Button.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
