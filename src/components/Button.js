import PropTypes from 'prop-types';
import './Button.scss';
import React from 'react';

export const Button = ({ toggler, name }) => (
  <button
    type="button"
    onClick={toggler}
    className="Button"
  >
    {name}
  </button>
);

Button.propTypes = {
  toggler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
