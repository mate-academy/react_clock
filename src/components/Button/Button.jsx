import React from 'react';
import PropType from 'prop-types';

export const Button = ({ onClick, isClockVisible }) => (
  <button
    type="button"
    onClick={onClick}
    className="button has-text-warning-dark is-rounded"
  >
    {isClockVisible ? 'Hide clock' : 'Show clock'}
  </button>
);

Button.propTypes = {
  onClick: PropType.func.isRequired,
  isClockVisible: PropType.bool.isRequired,
};
