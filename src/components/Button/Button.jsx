import React from 'react';
import PropType from 'prop-types';

export const Button = ({ action, state }) => (
  <button
    type="button"
    onClick={action}
  >
    {state ? 'Hide clock' : 'Show clock'}
  </button>
);

Button.propTypes = {
  action: PropType.func.isRequired,
  state: PropType.bool.isRequired,
};
