import React from 'react';
import PropTypes from 'prop-types';

export const ClockControl = ({ action, text }) => (
  <button
    type="button"
    onClick={action}
  >
    {text}
  </button>
);

ClockControl.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
