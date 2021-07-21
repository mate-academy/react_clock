import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const Button = props => (
  <button
    type="button"
    onClick={props.onClick}
    className="state-button"
  >
    {props.name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
