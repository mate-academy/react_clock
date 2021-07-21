import React from 'react';
import PropTypes from 'prop-types';
import сlassNames from 'classnames';
import './buttons.scss';

export const Button = ({ callback, className, text }) => {
  const classes = сlassNames('button', className);

  return (
    <button
      onClick={callback}
      type="button"
      className={classes}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
