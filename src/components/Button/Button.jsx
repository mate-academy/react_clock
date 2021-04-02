import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => (
  <button
    type="button"
    className="button m-5"
    onClick={props.event}
  >
    {props.name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
