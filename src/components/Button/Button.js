import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ body, click }) => (
  <button
    type="button"
    className="button"
    onClick={click}
  >
    {body}
  </button>
);

Button.propTypes = {
  body: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
