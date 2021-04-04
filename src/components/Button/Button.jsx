import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, event }) => (
  <button
    type="button"
    className="button m-5"
    onClick={event}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
