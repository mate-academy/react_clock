import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ click }) => (
  <button type="button" onClick={click}>
    Clock visibility
  </button>
);

Button.propTypes = {
  click: PropTypes.func.isRequired,
};
