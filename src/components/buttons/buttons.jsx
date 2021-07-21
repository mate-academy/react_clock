import React from 'react';
import PropTypes from 'prop-types';
import сlassNames from 'classnames';
import './buttons.scss';

export const Button = ({ callback, buttonClass, text }) => {
  const classes = сlassNames('button', buttonClass);

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
  buttonClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
