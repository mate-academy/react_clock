import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="button"
  >
    {name}

  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
