import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ body, clickHandler }) => (
  <button
    type="button"
    className="button"
    onClick={clickHandler}
  >
    {body}
  </button>
);

Button.propTypes = {
  body: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
